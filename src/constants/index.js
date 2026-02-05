// ✅ Import images from the assets folder
import { ImprovedNoise } from "three/examples/jsm/Addons.js";
import p1 from "../assets/performance1.png";
import p2 from "../assets/performance2.png";
import p3 from "../assets/performance3.png";
import p4 from "../assets/performance4.png";
import p5 from "../assets/performance5.jpg";
import p6 from "../assets/performance6.png";
import p7 from "../assets/performance7.png";

import icon1 from "../assets/feature-icon1.svg";
import icon2 from "../assets/feature-icon2.svg";
import icon3 from "../assets/feature-icon3.svg";
import icon4 from "../assets/feature-icon4.svg";
import icon5 from "../assets/feature-icon5.svg";

// ✅ Navigation links
const navLinks = [
  { label: "Store", ref: "#hero" },
  { label: "Mac", ref: "#product-viewer" },
  { label: "New", ref: "#showcase" },
  { label: "Graphics", ref: "#performance" },
  { label: "Properties", ref: "#features" },
  { label: "Reality", ref: "#highlights" },
];

// ✅ Parts that don't change
const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

// ✅ Imported images used here (works properly with Vite)
const performanceImages = [
  { id: "p1", src: p1 },
  { id: "p2", src: p2 },
  { id: "p3", src: p3 },
  { id: "p4", src: p4 },
  { id: "p5", src: p5 },
  { id: "p6", src: p6 },
  { id: "p7", src: p7 },
];

// ✅ Positions for each image
const performanceImgPositions = [
  { id: "p1", left: 5, bottom: 65 },
  { id: "p2", right: 10, bottom: 60 },
  { id: "p3", right: -5, bottom: 45 },
  { id: "p4", right: -2, bottom: 0 },
  { id: "p5", left: 20, bottom: 50 },
  { id: "p6", left: 2, bottom: 30 },
  { id: "p7", left: 0, bottom: 0 },
];

// ✅ Features section
const features = [
  {
    id: 1,
    icon: icon1,
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: icon2,
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: icon3,
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: icon4,
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: icon5,
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

// ✅ Feature videos
const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

// ✅ Footer links
const footerLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sales Policy", link: "#" },
  { label: "Legal", link: "#" },
  { label: "Site Map", link: "#" },
];

// ✅ Exports
export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
};
