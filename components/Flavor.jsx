import React from "react";
import CardHeading from "./CardHeading";

const Flavor = () => {
  return (
    <section className="bg-milk h-dvh">
      <div className="items-center relative justify-center w-full flex">
        <div
          className="text-center flex flex-col absolute left-8 justify-center
         items-center top-2 translate-y-30"
        >
          <h1 className="text-[#523122] text-[6.5rem] leading-15">we have 6</h1>
          <CardHeading
            title="Freaking"
            otherClasses="z-50 -rotate-5 border-2 border-milk"
          />
          <h1 className="text-[#523122] text-[6.5rem] leading-8">
            Delicious Flavors
          </h1>
        </div>
        <div>Hello</div>
      </div>
    </section>
  );
};

export default Flavor;
