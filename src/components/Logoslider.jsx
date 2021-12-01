import React, {Fragment} from "react";
import Reveal from "react-reveal/Reveal"

function Logoslider(){
   return (
  <Fragment>
        <Reveal effect="fadeInUp">
         <section className="logo-slider-section padding-bottom-2 padding-top" style={{paddingBottom:"0px"}}>
             <section className="logo-slider-section section--bg padding-bottom padding-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-header mw-100">
                                <h3 className="title">Our past Sponsers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="logo-slider owl-theme owl-carousel">
                        <div className="item">
                            <img src="./assets/images/sponsor/devfolio.png" alt="banner" />
                        </div>
                        
                        <div className="item">
                            <img src="./assets/images/sponsor/Hilers.png" alt="banner" />
                        </div>
                        <div className="item" style={{padding:"0px"}}>
                            <img src="./assets/images/sponsor/GlobalShala.png" alt="banner" style={{height:"50px"}}/>
                        </div>
                        <div className="item">
                            <img src="./assets/images/sponsor/Rapido.png" alt="banner" />
                        </div>
                        
                        <div className="item">
                            <img src="./assets/images/sponsor/Fitness.png" alt="banner" />
                        </div>
                        <div className="item">
                            <img src="./assets/images/sponsor/Mahalaxmi.png" alt="banner" />
                        </div>
                        
                        
                        
                        <div className="item">
                            <img src="./assets/images/sponsor/NareshMarketing.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </section>


             </section>
        </Reveal>
  </Fragment>
   );
}
export default Logoslider;
