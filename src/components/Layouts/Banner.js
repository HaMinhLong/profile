import React from "react";

import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <h2>
        <span>H</span>ello
      </h2>
      <h2>
        I Am <span>Developer</span>
      </h2>
      <Fade right cascade>
        <div className="link">
          <ul>
            <a
              target="_blank"
              href="https://www.facebook.com/ha.minhlong.2000/"
              rel="noreferrer"
            >
              <li>
                <i className="fab fa-facebook"></i>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/HaMinhLong"
              rel="noreferrer"
            >
              <li>
                <i className="fab fa-github"></i>
              </li>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/long-h%C3%A0-minh-514598197/"
              rel="noreferrer"
            >
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
            </a>
          </ul>
        </div>
      </Fade>
    </section>
  );
};

export default Banner;
