import React from "react";
import './FirstPage.css'


const FirstPage=()=>{
    const openInNewTab = (url) =>{
        window.open(url, "_blank", "noreferrer");
    };
    return(
    <section class='Fpage-container1' id="hero">
        <div class='main-contain'>
            <h2> Public Global Decentralized <span>Investment Program Built on </span>Binance Smartchain.</h2>

            <h4>The World's Biggest Earning Platform.</h4>

            <a href="#">
                <button
                    role="link"
                    onClick={()=> openInNewTab("https://buy.amplecoin.in")}>BUY NOW</button>
            </a>
        </div>

        <div className="main-img">
            <img src="../assets/images/main.png" className="spin"></img>
        </div>

    </section>
    )

}

export default FirstPage;