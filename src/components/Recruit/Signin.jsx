import React, { Fragment, useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Signin(props) {


    return (
        <Fragment>

            <div className="account-section bg_img" data-background="./assets/images/account-bg.jpg">
                <div className="container">
                    <div className="account-title text-center">
                        <a href="index.html" className="back-home"><i className="fas fa-angle-left"></i><span>Back <span className="d-none d-sm-inline-block">To Robotix Club</span></span></a>
                        <a href="#0" className="logo">
                            <img src="./assets/images/robotixLogo.png" alt="logo" style={{height:"150px"}}/>
                        </a>
                    </div>
                    <div className="account-wrapper">
                        <div className="account-body">
                            <h4 className="title mb-20">Welcome To Robotix Club</h4>
                            <div className="account-form">
                                <div className="form-group">
                                    <label htmlFor="sign-up">Your Email </label>
                                    <input type="text" placeholder="Enter Your Email " id="sign-up" name="email" onChange={props.funcHandleInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password</label>
                                    <input type="text" placeholder="Enter Your Password" id="pass" name="password" onChange={props.funcHandleInput} />
                                    <span className="sign-in-recovery">Forgot your password? <a href="reset-password.html">recover password</a></span>
                                </div>
                                <div className="form-group text-center">
                                    <Link to={"/recruitment_form"}>
                                    <button type="submit" className="mt-2 mb-2" onClick={props.funcHandleSubmit}>Sign In</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="or">
                    <span>OR</span>
                </div>
                <div className="account-header pb-0">
                    <span className="d-block mb-30 mt-2">Sign up with your work email</span>
                    <a href="#0" className="sign-in-with"><img src="./assets/images/icon/google.png" alt="icon"/><span>Sign Up with Google</span></a>
                    <span className="d-block mt-15">Don't have an account? <a href="sign-up.html">Sign Up Here</a></span>
                </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Signin;
