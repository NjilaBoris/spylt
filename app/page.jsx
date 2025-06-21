import Content from "@/components/Content";
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
      </div>
    </LenisWrapper>
  );
};

export default Home;
