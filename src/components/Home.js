import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import hero from "../images/hero.jpg";
import hero3 from "../images/hero3.jpg";
import hero2 from "../images/hero2.jpg";

function Home() {
  const Hero = {
    titles: ["TAME THE MARKETS", "OUR MISSION", "OUR VISION"],
    messages: [
      `Automation is powering the next generation of successful traders.
              At Jarvistrade, we offer you the very best of awesome trading
              tools to trade like the very best in the game. From trading
              indicators, scripts to expert advisors, we give you the very best
              tools that successful traders use to stay clear of the losing
              herd.`,
      `At Jarvistrade, our mission is to simplify the trading experience for traders by providing innovative and reliable trading bots.
        We believe that our technology can help traders
        overcome the challenges of manual trading, allowing them to trade with more confidence and achieve greater profitability.`,
      `Our vision at Jarvistrade is to become the leading provider of trading technologies that make trading accessible and profitable for everyone. 
       We strive to be at the forefront of technological innovation in the trading industry and to continuously improve our products to meet the evolving needs of traders.
       We aim to create a world where trading is easy, seamless, and enjoyable for all.`,
    ],
    images: [hero, hero3, hero2],
  };

  const [contentIndex, setContentIndex] = useState(0);

  const [heroContent, setHeroContent] = useState(Hero.messages[contentIndex]);
  const [heroTitle, setHeroTitle] = useState(Hero.titles[contentIndex]);
  const [heroBG, setHeroBG] = useState(Hero.images[contentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex((prevIdx) =>
        prevIdx < Hero.messages.length - 1 ? prevIdx + 1 : 0
      );
    }, 5000);

    // Use the functional form of setHeroContent to access the latest contentIndex
    setHeroContent(Hero.messages[contentIndex]);
    setHeroTitle(Hero.titles[contentIndex]);
    setHeroBG(Hero.images[contentIndex]);

    return () => clearInterval(intervalId);
  }, [contentIndex]); // Add contentIndex and messages as dependencies

  return (
    <>
      <Navbar />
      <section class="hero">
        <div class="container">
          <div class="hero-image">
            <img src={heroBG} alt="Hero Image" />
          </div>
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <h1>{heroTitle}</h1>
            <h2>{heroContent}</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
