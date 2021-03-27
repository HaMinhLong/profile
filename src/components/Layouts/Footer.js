import React from "react";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="info">
        <Fade left cascade>
          <div>Minh Long .</div>
        </Fade>
        <Fade right cascade>
          <div>
            <p>Contact Me</p>
            <p>haminhlong3@gmail.com</p>
            <p>9/71A, ngõ 116 - Nguyễn Xiển - Thanh Xuân - TP. Hà Nội</p>
            <p>+84 63 339 657</p>
          </div>
        </Fade>
      </div>
      <Fade bottom cascade>
        <div className="copyright">
          <p>&copy; Minh Long. All rights reserves</p>
        </div>
      </Fade>
    </section>
  );
};

export default Footer;
