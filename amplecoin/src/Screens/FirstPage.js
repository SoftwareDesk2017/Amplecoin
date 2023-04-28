import React from "react";
import './FirstPage.css'


const FirstPage=()=>{
    return(
    <div class='Fpage-container'>
        <div class='about-contain'>
            <h2> Public Global Decentralized <span>Investment Program Built on </span>Binance Smartchain.</h2>

            <h4>The World's Biggest Earning Platform.</h4>

            <a href="#">
                <button>BUY NOW</button>
            </a>
        </div>

        <div>
            <img src="../assets/images/main.png" className="spin"></img>
        </div>

    </div>
    )

}

export default FirstPage;