import Content from "@/components/Content";
import Flavor from "@/components/Flavor";
import Hero from "@/components/Hero";
import LenisWrapper from "@/components/LenisWrapper";
import React from "react";

const Home = () => {
  return (
    <LenisWrapper>
      <div>
        <div className="bg-main-bg ">
          <Hero />
          <Content />
        </div>
        <Flavor />
      </div>
    </LenisWrapper>
  );
};

export default Home;
