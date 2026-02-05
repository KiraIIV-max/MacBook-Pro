import React from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import laptop from "../assets/laptop.png";
import sun from "../assets/sun.png";
import ai from "../assets/ai.png";
import battery from "../assets/battery.png";
import bird from "../assets/bird.png";
const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 2,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="highlights">
      <h2>There’s never been a better time to upgrade.</h2>
      <h3>Here’s what you get with the new MacBook Pro.</h3>
      <div className="masonry flex justify-center">
        <div className="left-column">
          <div
            style={{
              backgroundImage: `url(${bird})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={laptop} alt="Laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src={sun} alt="Sun" />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src={ai} alt="AI" />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src={battery} alt="Battery" />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
