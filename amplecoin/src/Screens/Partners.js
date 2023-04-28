import React from "react";
import './FirstPage.css'

const Partners=()=>{
    return(

        <div >

            <h2>Our Partners</h2>
            <div className="Parners-container">
                <article>
                <a href="https://www.coingecko.com"><img src="../assets/images/CoinGecko-logo.jpg" /></a>
                </article> 

                <article>
                <a href="https://coinmarketcap.com"><img src="../assets/images/coinmarketcap.jpg" /></a>
                </article> 

                <article>
                <a href="https://coinpaprika.com/"><img src="../assets/images/coinpaprika.jpg" /></a>
                </article> 

                <article>
                <a href="https://coinranking.com/"><img src="../assets/images/coincodex.jpg" /></a>
                </article> 


            </div>


        </div>
    )
}

export default Partners;