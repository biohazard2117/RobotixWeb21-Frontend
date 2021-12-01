import api from "../service";
import React, { Fragment, useState } from "react";
import Reveal from "react-reveal/Reveal";
import {contactStatus, warning, validate} from "../assets/js/contactus.js";


function Contact() {
    const [info, setInfo] = useState({});
    const [validation, setValidation] = useState({email:false, name:false, message:false});


    const handleInput = (e) => {
        let key = e.target.id;
        let value = e.target.value;

        setInfo({ ...info, [key]: value });

    }

    const handleSubmit =(e) => {
        e.preventDefault();
   

        validate(info,validation,setValidation);

            if (validation.email && validation.name && validation.message) {
                console.log('inside submit')
    
    
                api.post("/extras/Contact/", info)
                    .then(response => {
                        console.log(response);
                        setValidation({email:false, name:false, message:false})
                        setInfo({});
                        document.getElementById("contact_form").reset();
                        contactStatus(true);
    
                    })
                    .catch(error => {
                        console.log(error);
                        
                        contactStatus(false);
                    })

        }

        else{
            warning(validation);
        }
      
        
    }
    return (
        <Fragment>
    
            <section id="contact-section" className="page-header single-header bg_img oh" data-background="./assets/images/page-header.png">
                <div className="bottom-shape d-none d-md-block">
                    <img src="./assets/css/img/page-header.png" alt="css" />
                </div>
            </section>
            <Reveal effect ="fadeInUp">
            <section className="contact-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header mw-100 cl-white">
                        <h2 className="title">Contact Robotix Club</h2>
                        <br/>
                    </div>
                    <div className="row justify-content-center justify-content-lg-between">
                        <div className="col-lg-7">
                            <div className="contact-wrapper">
                                <h4 className="title text-center mb-30">Get in Touch</h4>
                                <div className="msg-status"></div>
                                <form className="contact-form" id="contact_form">
                                    <div  className="form-group">
                                        <label htmlFor="name">Your Full Name</label>
                                        <input onChange={handleInput} type="text" placeholder="Enter Your Full Name" id="name" required />
                                        <div  id="contact_name_warning" className="warning-msg">This field is required</div>
                                    </div>
                                    {/* <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" placeholder="Enter Your Phone Number " id="phone" required />
                                    </div> */}
                                    <div  className="form-group ">
                                        <label htmlFor="email">Your Email </label>
                                        <input onChange={handleInput} type="text" placeholder="Enter Your Email " id="email" required  />
                                       
                                        <div  id="contact_email_warning" className="warning-msg">
                                         This field is required / invalid</div>
       
                                    </div>

                                    {/* <div className="form-group">
                                        <label htmlFor="subject">Your Subject</label>
                                        <input type="text" placeholder="Enter Your Subject " id="subject" required />
                                    </div> */}
                                    <div  className="form-group mb-0">
                                        <label htmlFor="message">Your Message </label>
                                        <textarea onChange={handleInput} id="message" placeholder="Enter Your Message" required></textarea>
                                        <div  id="contact_message_warning" className="warning-msg">This field is required</div>
                                        {/* <div className="form-check">
                                    <input type="checkbox" id="check" checked/><label htmlFor="check">I agree to receive emails, newsletters and promotional messages</label>
                                </div> */}
                                    </div>
                                    <div className="form-group">
                                        <input onClick={handleSubmit} type="submit" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-content">
                                <div className="man d-lg-block d-none">
                                    <img src="./assets/images/contact/man.png" alt="bg" />
                                </div>
                                <div className="section-header left-style">
                                    <h3 className="title">Have questions?</h3>
                                    <p>Have questions about the Club or events? We have answers!</p>
                                    {/* <a href="#0">Read F.A.Q <i className="fas fa-angle-right"></i></a> */}
                                </div>
                                <div className="contact-area">
                                    <div className="contact-item">
                                        <div className="contact-thumb">
                                            <img src="./assets/images/contact/contact1.png" alt="contact" />
                                        </div>
                                        <div className="contact-contact">
                                            <h5 className="subtitle">Email Us</h5>
                                            <a href="Mailto:robotixclub@nitrr.ac.in">robotixclub@nitrr.ac.in</a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-thumb">
                                            <img src="./assets/images/contact/contact3.png" alt="contact" />
                                        </div>
                                        <div className="contact-contact">
                                            <h5 className="subtitle">Visit Us</h5>
                                            <p>National Institute of Technology, Raipur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Reveal>
        </Fragment>
    );
}
export default Contact;
