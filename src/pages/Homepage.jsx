import React from "react";
import Hero from "../components/homepage/Hero";
import BestDeals from "../components/homepage/BestDeals";
import Promotions from "../components/homepage/Promotions";
import Popular from "../components/homepage/Popular";
import Collection from "../components/homepage/Collection";
import Ads from "../assets/Ads.png";
import Explore from "../components/homepage/Explore";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <BestDeals />
      <Promotions />
      <Popular />
      <img src={Ads} className="w-full h-[350px] lg:px-16 px-0 py-8" />
      <Collection />
      <Explore />
    </div>
  );
};

export default Homepage;
