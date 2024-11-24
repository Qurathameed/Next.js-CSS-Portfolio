import React from "react";
import SocialMedia from "./Social";// Assuming you have a SocialMedia component for social links

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social">
          <SocialMedia/>
        </div>
        <p className="copyright">
          &copy; Qurat Hameed - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
