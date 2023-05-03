import React from "react";
import './FirstPage.css'


const About=()=>{
    return(
    <section class='Fpage-container2' id="about">
        <div>
            <img src="../assets/images/About.png" className="abt-img"></img>
        </div>

        <div class='about-contain'>
            <h2> <span>What is </span>Ample Coin?</h2>
            <p>Ample Coin ( AMP )  is Indias First utility Token, enables people to make their Utility Bill Payments using the PAY App. AMP token has limited supply, used by thousands of people to trade, shopping and general usage, which delivers social impact and creates a new sustainable circular economy. It is a future open source blockchain based cryptocurrency with fast transactions and low fees for next E-Commerce.
                    the primary technical elements of the Amp token contract and collateral managers. In particular, it presents novel partition strategies for enabling "stake-in-place" innovation for BNB tokens. 
                    The paper also presents an analysis of legacy payment infrastructure, distributed payment networks, and token economics. This research uses established economic models in addition to a unique, in-depth assessment of the long-term utility, value, and stability of a collateral token network</p>

            <h2>Why Amp?</h2>
            <p>Amp helps you decentralize risk for your users with smart contract features purpose-built for collateral. Nothing more, nothing less.</p>
        </div>

    </section>
    )

}

export default About;