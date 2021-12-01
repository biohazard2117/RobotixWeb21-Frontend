import React, {Fragment, useEffect, useState } from 'react';


const calculateTimeLeft = () => {
  //let year = new Date().getFullYear();
  let difference = +new Date(2021, 4, 31) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function ComingSoon(){
 
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
   setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  
});
    
        return (
          <Fragment>
            <div
              className="coming-soon bg_img"
              data-background="./assets/images/coming-soon.jpg"
            >
              <div className="container">
            <img src = "./assets/images/robotixLogo.png" style={{height: "200px", width:"500px"}} alt = "logo"></img>
                <div className="coming-wrapper">
                  <h1 className="title">COMING SOON</h1>
                  <ul className="countdown">
                    <li>
                      <h3 className="c-title">
                        <span className="days">{timeLeft.days}</span>
                      </h3>
                      <p className="days_text">days</p>
                    </li>
                    <li>
                      <h3 className="c-title">
                        <span className="hours">{timeLeft.hours}</span>
                      </h3>
                      <p className="hours_text">hours</p>
                    </li>
                    <li>
                      <h3 className="c-title">
                        <span className="minutes">{timeLeft.minutes}</span>
                      </h3>
                      <p className="minu_text">minutes</p>
                    </li>
                    <li>
                      <h3 className="c-title">
                        <span className="seconds">{timeLeft.seconds}</span>
                      </h3>
                      <p className="seco_text">seconds</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fragment>
        );
    
}

export default ComingSoon;