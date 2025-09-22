---
layout: page
title: "Contact"
permalink: /contact/
author_profile: true
---

<div class="contact-container">
  <h1>Contact Me</h1>

  <p>If you'd like to get in touch, feel free to email me directly at:</p>
  <p>📬 <a href="mailto:shenderson@asu.edu">shenderson@asu.edu</a></p>
  
  <p>Or, use the form below:</p>

  <style>
    /* Container for centering content */
    .contact-container {
      background-color: #fff8e1; /* Light yellow background */
      padding: 2rem;
      max-width: 900px;  /* You can adjust the max width here */
      margin: 0 auto;    /* Center the container */
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      text-align: center; /* Centers the content within the container */
    }

    /* Styling for the form itself */
    form.contact-form {
      background-color: #fdf6e3;
      padding: 2rem;
      border-radius: 8px;
      max-width: 800px;
      margin-top: 2rem;
      font-family: 'Merriweather', serif;
      margin-left: auto;
      margin-right: auto; /* Centers the form inside the container */
    }

    /* Labels and form inputs styling */
    form.contact-form label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #333;
    }

    form.contact-form input,
    form.contact-form textarea {
      width: 100%;
      padding: 0.75rem;
      margin-bottom: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: 'Merriweather', serif;
      font-size: 1rem;
      background-color: #fffef8;
      color: #333;
    }

    form.contact-form button {
      background-color: #e8c48f;
      color: #333;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    form.contact-form button:hover {
      background-color: #d4aa6d;
    }

    /* Optional: Style the headings */
    .contact-container h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    /* Optional: Style the paragraph text */
    .contact-container p {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
    }
  </style>

  <!-- Form itself -->
  <form class="contact-form" action="https://formspree.io/f/xyzngjzp" method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email</label>
    <input type="email" id="email" name="_replyto" required>

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Send</button>
  </form>
</div>

