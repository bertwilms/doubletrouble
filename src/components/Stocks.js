import React from "react";
import "../App.css";
import { stockData } from "../data/stockData";
import Card from "../components/Card";

export const Stocks = () => {
  return (
    <>
    // https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
      <div className="stock-container">Welcome to Stock Tracker
      {stockData.map((data, key) => {
          return (
            <Card
            id={data.company}
            datum={data.ticker}
            tijd={data.stockPrice}
            speler1={data.timeElapsed}            
          />            
          );
        })}
      </div>
    </>
  );
};