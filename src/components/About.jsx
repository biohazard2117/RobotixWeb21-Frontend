import {Fragment} from "react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

const About = () => {
    return (
    <Fragment>
        <section id="about-section" className="about-section padding-top padding-bottom oh" href="#1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-5">
                <Fade left>
                    <div className="about-thumb rtl pr-xl-15" >
                        <img src="./assets/images/arduino.png" alt="about" />
                    </div>
                </Fade>
                </div>
                <div className="col-xl-7 pl-xl-0">
                    <div className="about-content">
                    <Fade bottom cascade duration={800} distance="100px">

                        <div className="section-header left-style">
                            <h5 className="cate">A Few Words About Us</h5>
                            <h2 className="title">Who are we ??</h2>
                            <p>The Robotix Club of NIT Raipur is the perfect combination of innovators, contributors and experts in the field of Robotics. The club has been inspiring minds ever since its inception in 2014. The foundation of Robotix Club was laid by a group of enthusiastic and ardent students with a vision to promote the versatile field of robotics and it’s ever growing application in present time. We make sure that every student seeking the knowledge gets it .The club is guided by our esteemed faculty In charge Dr. Rajesh Doriya (Department of Information Technology) who makes sure there is proper functioning of the club.</p>
                            <br />
                            <h2 className="title">Our Vision</h2>
                            <p>Robotix Club NITRR strives to develop technological skills in the diverse field of mechatronics and robotics by transcending the theoretical knowledge into live application and providing live simple yet creative solution for real world complex problems. The club's focus has always been on student specific events and workshops to increase the reach of robotics in the college. Major part of the club has been involved with students as well as teachers working together as a cohesive unit.</p>
                        </div>
                    </Fade>
                        <div className="counter-area-5">
                            <div className="counter-item-5">
                                <div className="counter-thumb">
                                    <img src="./assets/images/counter/counter1.png" alt="counter" />
                                </div>
                                <div className="counter-content">
                                    <h3 className="title"><span className="counter">45</span></h3>
                                    <p>Total Members</p>
                                </div>
                            </div>
                            <div className="counter-item-5">
                                <div className="counter-thumb">
                                    <img src="./assets/images/counter/counter2.png" alt="counter" />
                                </div>
                                <div className="counter-content">
                                    <h3 className="title"><span className="counter">4</span><span>+</span></h3>
                                    <p>Events</p>
                                </div>
                            </div>
                            <div className="counter-item-5">
                                <div className="counter-thumb">
                                    <img src="./assets/images/counter/counter3.png" alt="counter" />
                                </div>
                                <div className="counter-content">
                                    <h3 className="title"><span className="counter">5</span></h3>
                                    <p>Domains</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Fragment>
    )
}

export default About
