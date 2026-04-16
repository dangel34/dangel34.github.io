---
layout: default
title: Contact
---

# Contact

Use the form below to send a message directly to my inbox. I'll get back to you as soon as I can.

---

<form
  class="contact-form"
  action="https://formsubmit.co/8a8e0d384d7c741dc384a77c0fb7d011"
  method="POST">

  <!-- FormSubmit configuration -->
  <input type="hidden" name="_url" value="https://dangel34.github.io/contact">
  <input type="hidden" name="_subject" value="Portfolio Contact">
  <input type="hidden" name="_next" value="https://dangel34.github.io/thanks">
  <input type="hidden" name="_captcha" value="false">
  <!-- Honeypot — bots fill this; real users leave it blank -->
  <input type="text" name="_honey" class="form-honeypot" tabindex="-1" autocomplete="off">

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your name" required>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="your@email.com" required>
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Your message..." required></textarea>
  </div>

  <button type="submit" class="submit-btn">Send Message</button>

</form>
