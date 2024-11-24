import Button from "@/Components/Button";
import React from "react";


const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code"></i>
            <h3>Web Development</h3>
            <p>
              As a web developer, I specialize in crafting visually appealing
              and functional websites.
            </p>
            <Button />
          </div>

          <div className="services-box">
            <i className="bx bx-palette"></i>
            <h3>UI/UX Design</h3>
            <p>
              As a web developer, I can also contribute to UI/UX design. I&#39;ve a
              strong understanding of UI principles.
            </p>
            <Button />
          </div>

          <div className="services-box">
            <i className="bx bxl-android"></i>
            <h3>App Development</h3>
            <p>
              As a web developer, I can help you create engaging and
              user-friendly mobile applications.
            </p>
            <Button />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
