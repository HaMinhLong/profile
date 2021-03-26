import React from "react";
import Fade from "react-reveal/Fade";

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
        </div>
      </Fade>
      <Fade right cascade>
        <div className="img-box">
          <img
            src="https://cdn.mos.cms.futurecdn.net/CRGUJC4PuQ3zT7bfvuZVCZ.jpg"
            alt=""
          />
        </div>
      </Fade>
    </section>
  );
};

export default About;
