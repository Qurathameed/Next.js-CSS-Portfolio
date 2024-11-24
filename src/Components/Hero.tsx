"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Qurat Hameed</h1>
        <h3>Frontend Developer</h3>
        <p>
          As a skilled web developer, I specialize in creating innovative,
          visually impactful websites that engage audiences and deliver measurable
          results. With a commitment to clean, efficient code and a sharp eye for
          design, I excel at transforming complex concepts into seamless,
          user-friendly digital experiences. Let's collaborate to turn your vision
          into reality.
        </p>
        <div className="social-links">
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="btn-box">
          <a href="#">Hire Me</a>
          <a href="#">Let's Talk</a>
        </div>
        <div className="profile">
          <Image
            src="/pic.png"
            alt="profile picture"
            width={150}
            height={150}
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
