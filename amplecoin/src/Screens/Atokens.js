import React from "react";
import { Chart } from "react-google-charts";
import './FirstPage.css'



export const Atokens = ()=>{
 const data = [
    ["token","value"],
    ["Lock - 840k ", 840000 ],
    ["Partner Channel - 50k ", 50000],
    ["Public Sell - 70k", 70000],
    ["Dex Liquidity - 20k", 20000],
    ["Commission Distribution - 20k", 20000],
  ];
  const tabledata = [
    { name: "Coin Name", value: "AMPLE COIN" },
    { name: "Symbol", Value: "AMP" },
    { name: "Desimals", value:"18"},
    {name: "Total Supply", value:"10,00,000"},
  ]
  
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
    <section className="token-container" id="whitepaper">
      <div className="graph">
        <h2>TOKEN Details</h2>
        <table>
        
        {tabledata.map((val, key) => {
          return (
            <tr key={key} className="t1">
              <td>{val.name}</td>
              <td>{val.value}</td>
            </tr>
          )
        })}
      </table>
      
      </div>

    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

</section>
  );
}

export default  Atokens;