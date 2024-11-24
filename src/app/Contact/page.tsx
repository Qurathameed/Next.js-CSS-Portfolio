
import Footer from "@/Components/Footer";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" name="Email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
