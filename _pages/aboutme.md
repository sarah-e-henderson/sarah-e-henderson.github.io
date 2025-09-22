---
layout: archive
title: "About Me"
permalink: /about-me/
author_profile: true
---

<div class="about-me-container">
  <!-- About Me Blurb -->
  <div class="about-me-blurb">
    <h2>About Me</h2>
    <p>
      I'm Sarah, a passionate educator and researcher with a focus on language, linguistics, and education. I believe in fostering an inclusive, student-driven learning environment where students can explore their own unique ways of thinking and creating.
    </p>
    <p>
      My mission is to connect students with content that speaks to their lived experiences, allowing them to see the world through different perspectives. Whether in the classroom or in research, I am constantly exploring new ways to foster engagement, understanding, and critical thinking.
    </p>
  </div>

  <!-- Slideshow Section -->
  <div class="slideshow-container">
    <div class="mySlides fade">
      <img src="/images/ak.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/pr1.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/pr-milo.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/sobrina.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/casafrida.webp" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/pysl.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/studentconference.jpeg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/studentselfie.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/hiking.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/vikings.jpg" class="slide-image">
    </div>
    <div class="mySlides fade">
      <img src="/images/pr2.jpg" class="slide-image">
    </div>
  </div>
</div>

<style>
  /* Main Container */
  .about-me-container {
    max-width: 900px;
    margin: 30px auto;
    padding: 20px 15px;
  }

  /* About Me Text Blurb */
  .about-me-blurb {
    padding: 20px;
    background-color: #fff8e1;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px; /* Add space between the blurb and slideshow */
  }

  .about-me-blurb h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
  }

  .about-me-blurb p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }

  /* Slideshow Container */
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 500px; /* Increase height for better view */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for the slideshow */
    border-radius: 10px;
    overflow: hidden; /* Ensure images don't overflow */
  }

  .mySlides {
    display: none;
  }

  /* Image styling for maintaining aspect ratio and covering the container */
  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;  /* This ensures images cover the container without distortion */
  }

  /* Fade effect for slideshow */
  .fade {
    animation-name: fade;
    animation-duration: 5s;  /* Increased duration to 5 seconds */
  }

  @keyframes fade {
    from { opacity: 0.4; }
    to { opacity: 1; }
  }
</style>

<script>
  window.onload = function() {
    let slideIndex = 0;

    function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }  // Loop back to the first slide
      slides[slideIndex - 1].style.display = "block";  // Show the current slide
      setTimeout(showSlides, 5000);  // Change image every 5 seconds
    }
    
    showSlides(); // Start the slideshow
  };
</script>
