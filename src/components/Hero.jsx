import React, { useEffect, useRef } from "react";
import title from "../assets/title.png";
import video from "../assets/videos/hero.mp4";

const Hero = () => {
  const viderRef = useRef();
  useEffect(() => {
    if (viderRef.current) {
      viderRef.current.playBackRate = 2;
    }
  }, []);
  return (
    <section id="hero" className="flex  relative h-screen z-50 top-[60px]  w-full flex-col items-center justify-center text-center">
      <div>
        <h1>MacBook Pro</h1>
        <img className="w-[800px] h-[153px]" src={title} alt="MacBook" />
      </div>
      <video
        src={video}
        className="h-[400px] "
        autoPlay
        muted
        playsInline
      ></video>
      <div className="absolute  bottom-[140px]">
        <button className=" mb-3 bg-[#0071E3] py-2 px-4 rounded-full">Buy</button>
        <p> From $1599 or $133/mo. for 12 mo.</p>
      </div>
    </section>
  );
};

export default Hero;
