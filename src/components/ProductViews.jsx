import React from "react";
import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./models/three/StudioLights";
import ModelSwitcher from "./models/three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViews = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer">
      <h2 className="ml-20">Take a closer look</h2>

      <div className="controls">
        <p className="info">
          MacBook Pro | Avilable in 14* & 16* in Space Gray & Dark colors
        </p>

        <div className="flex-center gap-5 mt-5">
          {/* Color control */}
          <div className="color-control flex gap-3">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "w-6 h-6 rounded-full cursor-pointer bg-neutral-300",
                color === "#adb5bd" && "ring-2 ring-white"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "w-6 h-6 rounded-full cursor-pointer bg-neutral-900",
                color === "#2e2c2e" && "ring-2 ring-white"
              )}
            />
          </div>

          {/* Size control */}
          <div className="size-control flex gap-3">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer border-white",
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14″</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer border-white",
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16″</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default ProductViews;
