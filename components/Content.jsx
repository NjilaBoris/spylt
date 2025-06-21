"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const Content = () => {
  useGSAP(() => {
    const firstheading = SplitText.create(".headings", {
      type: "words",
    });
    const paragraph = SplitText.create(".paragraphs", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    gsap.to(firstheading.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".message_Container",
        start: "top center",
        end: "30% center",
        scrub: 2,
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".textMain",
        start: "+=10% center",
        end: "20% center",
        scrub: 2,
      },
    });
    tl.to(".textMain", {
      duration: 0.8,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    }).from(paragraph.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });
  return (
    <section
      className="bg-[#7f3b2d] text-milk h-dvh overflow-hidden flex justify-center
     items-center relative z-20 message_Container"
    >
      <h1 className="headings !absolute -translate-y-33 text-center leading-28 text-[6.8rem] text-[#faeade10] ">
        Stir up your <br /> fearless past and
      </h1>
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="textMain overflow-hidden relative translate-y-9 bg-[#E3A458] rotate-3 w-[20rem] text-center"
      >
        <h1 className="text-[#7f3b2d] text-[7rem] ">FUEL UP</h1>
      </div>
      <div className="absolute bottom-10">
        <h6 className=" text-[#fce1cd] font-bold text-center uppercase text-[2rem] paragraphs">
          your future with every <br /> gulp of Perfect Protein
        </h6>
      </div>
    </section>
  );
};

export default Content;
