import React from 'react';
import './Roadmap.css';

const Roadmap =()=>{
    return(
        <>
        <section className="ps-timeline-sec" id="roadmap">
        <div className="container">
            <ol className="ps-timeline">
                <li>
                    <div className="img-handler-top">
                            Block Chain Idea & concept creation for AMPLE coin
                    </div>
                    <span className="ps-sp-top">Jan 2023</span>
                </li>
                <li>
                    <div className="img-handler-bot">
                    Marketing Campaign Platform Creation.
                    </div>
                    <span className="ps-sp-bot">Feb 2023</span>
                </li>
                <li>
                    <div className="img-handler-top">
                               Time Management Launch website (Beta).
                    </div>
                    <span className="ps-sp-top">March 2023</span>
                </li>
                <li>
                    <div className="img-handler-bot">
                                 Explore Business Ample  grand launching.  Website Live, Start IDO
                    </div>
                   
                    <span className="ps-sp-bot">April 2023</span>
                </li>
            </ol>
        </div>
    </section>
          
          
        </>

    )
}
export default Roadmap;