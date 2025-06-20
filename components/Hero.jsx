import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {/* {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )} */}
        <div className="hero-content ">
          <div className="-mt-25">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>

          <div
            // style={{
            //   clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            // }}
            className="hero-text-scroll -mt-12"
          >
            <div className="hero-subtitle !w-[40rem]">
              <h1 className="text-center text-[6.2rem]">Protein + Caffeine </h1>
            </div>
          </div>

          <h2>
            Live life to the fullest  with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button !px-10 !py-[0.9rem] overflow-hidden">
            <p className="!text-[1.05vw]">Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
