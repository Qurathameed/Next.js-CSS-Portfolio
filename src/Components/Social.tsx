import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <main>
      <div className="social-media">
        <Link
          href="https://linkedin.com/in/qurat-hameed-13b935301"
          target="_blank"
          className="icons"
        >
          <i className="bx bxl-linkedin bx-flip-horizontal"></i>
        </Link>
        <Link
          href="https://github.com/Qurathameed"
          target="_blank"
          className="icons"
        >
          <i className="bx bxl-github bx-burst bx-flip-horizontal"></i>
        </Link>
        <Link
          href="https://www.instagram.com/ainne_reisenart?igsh=Zm44cGxmMTM3MTl0"
          className="icons"
        >
          <i className="bx bxl-instagram bx-burst-flip-horizontal"></i>
        </Link>
      </div>
    </main>
  );
};

export default SocialMedia;
