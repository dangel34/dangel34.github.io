---
layout: default
title: Contact
---

# Contact

Use the form below to send a message directly to my inbox. I'll get back to you as soon as I can.

---

<!-- ================================================================
  FormSubmit.co setup notes:
  1. The first submission will trigger an activation email to your inbox.
     Click the link to confirm — after that, all submissions deliver normally.
  2. For stronger privacy, replace the email in the action URL with your
     FormSubmit hash: visit https://formsubmit.co after activating, copy
     your unique hash, and update the action to:
       action="https://formsubmit.co/YOUR_HASH_HERE"
     This keeps your real email out of the HTML entirely.
================================================================ -->

<form
  class="contact-form"
  action="https://formsubmit.co/amatory.madder_1s@icloud.com"
  method="POST">

  <!-- FormSubmit configuration -->
  <input type="hidden" name="_subject" value="Portfolio Contact">
  <input type="hidden" name="_next" value="https://dangel34.github.io/thanks">
  <input type="hidden" name="_captcha" value="false">
  <!-- Honeypot — bots fill this; real users leave it blank -->
  <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">

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
