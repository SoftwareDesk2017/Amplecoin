import React from "react";
import { Chart } from "react-google-charts";
import './FirstPage.css'



export const Atokens = ()=>{
 const data = [
    ["token","value"],
    ["Lock - 84k ", 840000 ],
    ["Private Partner - 50k ", 50000],
    ["Public Sell - 7k", 70000],
    ["Dex Liquidity - 20k", 20000],
    ["Commission Distribution - 2k", 20000],
  ];
  
const options = {
    title: " Ample Coin Token Distribution",
    pieHole: 0.5,
    is3D: true,
    legendTextStyle: { color: '#FFF' },
    titleTextStyle: { color: '#FFF' },
    chartArea: {
      backgroundColor: {
        fill: '#2C0C3B',
        fillOpacity: 0.1
      },
    },
    backgroundColor: {
      fill: '#2C0C3B',
      fillOpacity: 0.8
    },

  };
  
  
  ;
  return (
    <div className="token-container">
      <div className="graph">
        <h2>TOKEN Details</h2>
        <h4>Coin Name - AMPLE COIN</h4>
        <h4>SYMBOL - AMP</h4>
        <h4>TOTAL SUPPLY - 1000000</h4>
      </div>

    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

</div>
  );
}

export default  Atokens;