import Content from "@/components/Content";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-main-bg ">
        <Hero />
        <Content />
      </div>
    </div>
  );
};

export default Home;
