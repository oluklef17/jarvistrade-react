import React from "react";
import Navbar from "./Navbar";
import bots from "../collections/bots";
import Product from "./Product";

function Bots() {
  return (
    <>
      <Navbar />
      <div className="product-grid">
        {bots.map((bot) => (
          <Product key={bot.id} product={bot} />
        ))}
      </div>
    </>
  );
}

export default Bots;
