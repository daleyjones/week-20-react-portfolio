import React from "react";
import '../App.css';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <p className="text-center">Feel free to get in touch with me.</p>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <address>
              <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a><br />
              <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a><br />
              <strong>Address:</strong> 123 Main Street, City, State ZIP<br />
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
