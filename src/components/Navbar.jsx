import React, {Fragment} from "react";
import {Link} from "react-router-dom";

function Navbar(){

    const scroll=(e)=>{
   
        document.getElementById(`${e.target.name}`).scrollIntoView({behavior:"smooth"})

    }

 
return(
  <Fragment>
   <header className="header-section navbar" id="navbar">
        <div className="container">
            <div className="header-wrapper">
                <div className="logo">
                    <a href="index.html">
                        <img src="./assets/images/favicon.png" alt="logo" style={{height:"70px", width:"50px", paddingTop:"10px", paddingBottom:"10px"}}/>
                    </a>
                </div>
                <ul className="menu">
                    <li>
                    <button name="main-section" className="navbtn" onClick={scroll}>Home</button>
                       
                    </li>
                    <li>
                    <button name="about-section" className="navbtn" onClick={scroll}>About</button>
                    
                    </li>
                   
                    <li>
                    <button name="events-section" className="navbtn" onClick={scroll}>Events</button>
                        
                    </li>
                    <li>
                    <button name="team-section" className="navbtn" onClick={scroll}>Team</button>
                        
                    </li>
                    <li>
                        <button name="contact-section" className="navbtn" onClick={scroll}>Contact</button>
                    </li>
                    <li>
                        <a className="navbtn" href="/alumni">
                        Alumni
                        </a>
                    </li>
                   
                </ul>
                <div className="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </div>
        </div>      
    </header> 
 </Fragment>
 )
}

export default Navbar;