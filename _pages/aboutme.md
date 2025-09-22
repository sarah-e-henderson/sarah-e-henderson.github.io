---
layout: archive
title: "About Me"
permalink: /about/
author_profile: true
---

<style>
/* Slideshow container */
.slideshow-container {
  position: relative;
  max-width: 100%;
  margin: auto;
}

/* Hide images by default */
.mySlides {
  display: none;
}

/* Style for previous and next buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  user-select: none;
  transition: 0.3s;
  transform: translateY(-50%);
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

/* On hover, change the color of the buttons */
.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text (optional) */
.text {
  color: #f2f2f2;
  font-size: 18px;
  position: absolute;
  bottom: 8px;
  left: 16px;
  right: 16px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px;
}

/* Slideshow content box */
.slideshow-content {
  background-color: #fff8e1;
  padding: 16px;
  border-left: 4px solid #f4c542;
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-left: 15px;  /* Margin on the left */
  margin-right: 15px; /* Margin on the right */
}

/* For text content, apply margins and better spacing */
.about-me-text {
  margin-left: 15px; /* Left margin */
  margin-right: 15px; /* Right margin */
  padding: 1rem 0; /* Add vertical spacing */
  line-height: 1.8; /* Increase line height for readability */
  font-size: 1rem;  /* Adjust font size for better readability */
  color: #333;      /* Text color */
}
</style>

<div class="slideshow-container">

  <!-- Slides -->
  <div class="mySlides fade">
    <img src="/images/t1.jpg" style="width:100%">
    <div class="text">Photo 1 Caption</div>
  </div>

  <div class="mySlides fade">
    <img src="/images/t2.jpg" style="width:100%">
    <div class="text">Photo 2 Caption</div>
  </div>

  <div class="mySlides fade">
    <img src="/images/t3.jpg" style="width:100%">
    <div class="text">Photo 3 Caption</div>
  </div>

  <div class="mySlides fade">
    <img src="/images/t4.jpg" style="width:100%">
    <div class="text">Photo 4 Caption</div>
  </div>

  <!-- Next and Previous buttons -->
  <a class="prev">&#10094;</a>
  <a class="next">&#10095;</a>
</div>

<div class="slideshow-content">
  <h2>About Me</h2>
  <p class="about-me-text">
    Hi, I’m Sarah, and I’m a passionate educator and linguist with a focus on promoting linguistic diversity and creativity in the classroom. My teaching philosophy is rooted in inclusive practices and the belief that all students can succeed when given the right support. I love to incorporate real-world experiences and encourage students to be creative and critical thinkers. When I’m not teaching, you can usually find me reading, traveling, or spending time with my family.
  </p>
</div>

<script>
// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Next/previous controls
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

prev.onclick = function() {
  slideIndex -= 2;  // Go back one slide
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlides();
}

next.onclick = function() {
  showSlides();
}
</script>
