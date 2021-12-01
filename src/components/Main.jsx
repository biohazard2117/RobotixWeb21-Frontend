import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Reveal from "react-reveal/Reveal";
import 'font-awesome/css/font-awesome.min.css';
function Main() {


    return (
      <Fragment>
        <Navbar />
        
        <a href="#0" className="scrollToTop">
          <i className="fas fa-angle-up"></i>
        </a>
        <div className="overlay" id="overlay"></div>

        <section
          id="main-section"
          className="banner-1 bg_img oh"
          data-background="./assets/images/banner/banner-bg-1.jpg"
          style={{ maxHeight: "700px" }}
        >
          <div className="dot-1 d-none d-lg-block">
            <img src="./assets/images/banner/dot-big.png" alt="banner" />
          </div>
          <div className="dot-2 d-none d-lg-block">
            <img src="./assets/images/banner/dot-big.png" alt="banner" />
          </div>
          <div className="dot-3">
            {/* <img src="./assets/images/banner/dot-sm.png" alt="banner" /> */}
          </div>
          <div className="dot-4">
            {/* <img src="./assets/images/banner/dot-sm.png" alt="banner" /> */}
          </div>
          <div className="banner-1-shape d-none d-lg-block">
            <img src="./assets/css/img/banner1-shape.png" alt="css" />
          </div>
          <br />
          <div className="container">
            <div className="row align-items-left">
              <div className="col-lg-12">
                <Reveal effect="fadeInUp">
                  <div className="banner-content-1 cl-white">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="title">
                      ROBOTI
                      <span className="X" style={{ fontSize: "75px" }}>
                        X
                      </span>{" "}
                      CLUB
                    </h1>
                    <br />
                    <p style={{ fontFamily: '"Josefin Sans", san serif' }}>
                      National Institute of Technology, Raipur
                    </p>
                    <div >
                      <div className="social-icons">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.instagram.com/robotix_nitrr"
                          className="icon"
                        >
                          <i
                            className="fa fa-instagram fa-2x"
                            aria-hidden="true"
                          ></i>
                          <span className="tooltiptext">Follow Us</span>
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.facebook.com/nitrrobots16/"
                          className="icon"
                        >
                          <i
                            className="fa fa-facebook-square fa-2x"
                            aria-hidden="true"
                          ></i>
                          <span className="tooltiptext">Follow Us</span>
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://in.linkedin.com/company/robotix-club-nit-raipur"
                          className="icon"
                        >
                          <i
                            className="fa fa-linkedin  fa-2x"
                            aria-hidden="true"
                          ></i>
                          <span className="tooltiptext">Follow Us</span>
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="mailto:robotixclub@nitrr.ac.in"
                          className="icon"
                        >
                          <i
                            className="fa fa-envelope  fa-2x"
                            aria-hidden="true"
                          ></i>
                          <span className="tooltiptext">Mail Us</span>
                        </a>
                      </div>
                    </div>
                    <br />
                    {/* <p>We, Robotix Club of NIT Raipur, constitute enthusiasts and experts in the field of robotics who deal with the application of robotics in real life situations....</p> */}
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="RobImage">
              <img src="./assets/images/mainRobot.png" />
            </div>
          </div>
        </section>
      </Fragment>
    );
}
export default Main;
