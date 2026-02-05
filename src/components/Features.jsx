import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Studiolights from "./models/three/StudioLights";
import clsx from "clsx";
import { features, featureSequence } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
import MacbookModel from "./models/Macbook.jsx";
import { Html } from "@react-three/drei";
import useMacbookStore from "../store/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// ✅ Import your video files directly
import video1 from "../assets/videos/feature-1.mp4";
import video2 from "../assets/videos/feature-2.mp4";
import video3 from "../assets/videos/feature-3.mp4";
import video4 from "../assets/videos/feature-4.mp4";
import video5 from "../assets/videos/feature-5.mp4";

const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { setTexture } = useMacbookStore();

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }
    // ✅ Keep your animation the same
    timeline
      .call(() => setTexture(video1))
      .to(".box1", { opacity: 1, y: 0, delay: 1 })
      .call(() => setTexture(video2))
      .to(".box2", { opacity: 1, y: 0 })
      .call(() => setTexture(video3))
      .to(".box3", { opacity: 1, y: 0 })
      .call(() => setTexture(video4))
      .to(".box4", { opacity: 1, y: 0 })
      .call(() => setTexture(video5))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light</h2>
      <Canvas id="f-canvas">
        <Studiolights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
