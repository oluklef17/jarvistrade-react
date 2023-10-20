import React from "react";
import "../styles/style.css";
import Navbar from "./Navbar";
import indicators from "../collections/indicators";
import Product from "./Product";

function Indicators() {
  return (
    <>
      <Navbar />
      <div className="product-grid">
        {indicators.map((indicator) => (
          <Product key={indicator.id} product={indicator} />
        ))}
      </div>
    </>
  );
}

export default Indicators;
