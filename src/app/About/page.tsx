'use client';
import React from "react";
import Image from "next/image";
import Button from "@/Components/Button";


const About = () => {
  return (
    <main>
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <p>
            As a passionate web developer, I specialize in crafting innovative
            and user-friendly digital experiences. With a strong foundation in
            Javascript and TypeScript, I&#39;m skilled in HTML, CSS, Javascript,
            Typescript, React, NextJS, and Figma. My goal is to leverage my technical
            expertise to create websites that not only look visually appealing but also
            provide seamless functionality and a positive user experience. I&#39;m dedicated
            to staying up-to-date with the latest industry trends and technologies to deliver
            cutting-edge solutions.
          </p>
          <Button />
        </div>
        <div className="about-img">
          <Image
            src="/pic.png" // Ensure the image path is correct
            alt="about profile picture"
            width={350}
            height={300}
            priority
            className="img"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
