import React from "react";
import Fade from "react-reveal/Fade";

import image from "../../images/about_image.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <Fade left cascade>
        <div className="content">
          <h3>
            <span>A</span>bout Me
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="https://www.topcv.vn/xem-cv/d1de1d9af0b1ad6954fedc1d484bdda4"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            My CV
          </a>
        </div>
      </Fade>
      <Fade right cascade>
        <div className="img-box">
          <img src={image} alt="" />
        </div>
      </Fade>
    </section>
  );
};

export default About;
