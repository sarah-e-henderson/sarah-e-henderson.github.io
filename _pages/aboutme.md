---
layout: archive
title: "About Me"
permalink: /about-me/
author_profile: true
---

<div class="about-me-container">
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
      <img src="/images/ak.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/pr1.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/pr-milo.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/sobrina.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/casafrida.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/pysl.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/studentconference.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/studentselfie.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/hiking.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/vikings.jpg" style="width:100%">
    </div>
    <div class="mySlides fade">
      <img src="/images/pr2.jpg" style="width:100%">
    </div>
  </div>
</div>

<style>
  /* Main Container to arrange the blurb and slideshow */
  .about-me-container {
    display: flex;
    gap: 30px;
    max-width: 900px;
    margin: 30px auto;
    justify-content: space-between;
  }

  /* Styling for the About Me text blurb */
  .about-me-blurb {
    flex: 1;
    padding: 20px;
    background-color: #fff8e1;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

  /* Slideshow Container styling */
  .slideshow-container {
    flex: 1;
    position: relative;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for the slideshow */
    border-radius: 10px;
    overflow: hidden; /* Ensure images don't overflow */
  }

  .mySlides {
    display: none;
  }

  /* Fade effect for slideshow */
  .fade {
    animation-name: fade;
    animation-duration: 2s;
  }

  @keyframes fade {
    from { opacity: 0.4 }
    to { opacity: 1 }
  }
</style>

<script>
  let slideIndex = 0;

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  showSlides();
</script>
