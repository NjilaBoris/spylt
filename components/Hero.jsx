"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    const title = SplitText.create(".hero-title");
    const heading = SplitText.create(".heading", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    const tl = gsap.timeline({
      delay: 1,
    });
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .from(
        title.chars,
        {
          yPercent: 28,
          stagger: 0.02,
          opacity: 0,
          ease: "power2.out",
        },
        "-<0.8"
      )
      .to(
        ".hero-text-scroll",
        {
          duration: 0.8,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-<0.8"
      )
      .from(
        heading.words,
        {
          yPercent: 300,
          rotate: 3,
          ease: "power1.inOut",
          duration: 1,
          opacity: 0,
          stagger: 0.01,
        },
        0
      );
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: 0.05,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="hero-content opacity-0">
          <div className="-mt-10">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>

          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll -mt-12"
          >
            <div className="hero-subtitle !w-[38rem] -mt-5">
              <h1 className="text-center text-[6rem]">Protein + Caffeine </h1>
            </div>
          </div>

          <h2 className="heading">
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
