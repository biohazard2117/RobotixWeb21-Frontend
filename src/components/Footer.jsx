import React, { Fragment } from "react";

function Footer() {
  const scroll = (e) => {
    document
      .getElementById(`${e.target.name}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <footer
        className="footer-section bg_img"
        data-background="./assets/images/footer/footer-bg.jpg"
      >
        <div className="container">
          <div className="footer-top padding-top padding-bottom">
            <div className="logo">
              <a href="#0">
                <img
                  src="./assets/images/robotixLogo.png"
                  style={{
                    height: "140px",
                    width: "350px",
                    position: "relative",
                    right: "100px",
                  }}
                  alt="logo"
                />
              </a>
            </div>
            <div className="footer-bottom">
              <ul className="footer-link">
                <li>
                  <a href="/">Recruitment</a>
                </li>
                <li>
                  <a
                    name="about-section"
                    onClick={scroll}
                    style={{ cursor: "pointer" }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    name="events-section"
                    onClick={scroll}
                    style={{ cursor: "pointer" }}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    name="contact-section"
                    onClick={scroll}
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a style={{ cursor: "pointer" }}>Terms of Service</a>
                </li>
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    href="http://nitrr.ac.in"
                    target="_blank"
                  >
                    NIT Raipur
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p
                style={{
                  fontSize: "1rem",
                  opacity: "0.8",
                  fontFamily: '"Josefin Sans", san serif',
                }}
              >
                Copyright © 2021. All Rights Reserved By{" "}
                <a href="#0">Robotix Club</a>
              </p>
              {/* <p style={{fontSize:"0.9rem", opacity:"0.8", fontFamily:'"Josefin Sans", san serif'}}>Made by <span className = "X">RobotiX Web Team</span></p> */}
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
