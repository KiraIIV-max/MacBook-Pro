import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViews from "./components/ProductViews";
import gsap from "gsap";
// ...existing code...
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShowCase from "./components/ShowCase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViews />
      <ShowCase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
