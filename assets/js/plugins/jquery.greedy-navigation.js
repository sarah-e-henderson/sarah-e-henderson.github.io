/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  // Calculate available space for navigation
  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
  
  // Log available space
  console.log('Available Space:', availableSpace);
  
  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {
    console.log('Visible links are overflowing');

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      breaks.push($vlinks.width());
      
      // Log breaks and item movement to hidden list
      console.log('Moving item to hidden list', breaks);
      
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);
      
      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;
      $btn.removeClass("hidden");
    }
  } else {
    console.log('Space available for more items in the visible list');

    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Log final states
  console.log('Button count:', $btn.attr("count"));
  console.log('Visible links count:', $vlinks.children().length);
  console.log('Breaks array:', breaks);

  // Update masthead height and body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }
}

// Window listeners for resize and orientation change
let resizeTimeout;

// Debounce resize event
$(window).on('resize', function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    updateNav(); // Only call updateNav after 200ms of inactivity
  }, 200); // Adjust the delay (200ms is usually fine)
});

// Debounce screen orientation change event
screen.orientation.addEventListener("change", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    updateNav();
  }, 200);
});

// Toggle button and hidden links on button click
$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

// Initial update of the navigation bar
updateNav();

