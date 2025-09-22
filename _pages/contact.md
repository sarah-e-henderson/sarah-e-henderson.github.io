---
layout: page
title: "Contact"
permalink: /contact/
author_profile: true
---

If you'd like to get in touch, feel free to email me directly at:

📬 <a href="mailto:shenderson@asu.edu">shenderson@asu.edu</a>

Or, use the form below:

<style>
  form.contact-form {
    background-color: #fdf6e3;
    padding: 2rem;
    border-radius: 8px;
    max-width: 600px;
    margin-top: 2rem;
    font-family: 'Merriweather', serif;
  }

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
</style>

<!-- Replace the action URL with your Formspree form ID -->
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="_replyto" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <button type="submit">Send</button>
</form>
