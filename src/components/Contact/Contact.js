import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="bg"></div>
      <div className="content">
        <h3>
          <span>C</span>ontact <span>M</span>e
        </h3>
        <br />
        <p>If you have any questions.</p>
        <p>Looking for a Developer?</p>
      </div>
      <form>
        <div>
          <h3>Send Me A Message</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="form">
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
