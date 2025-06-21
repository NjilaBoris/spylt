"use client";
import Lenis from "lenis";

export default function LenisWrapper({ children }) {
  const lenis = new Lenis({
    autoRaf: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return <div style={{ height: "100%" }}>{children}</div>;
}
