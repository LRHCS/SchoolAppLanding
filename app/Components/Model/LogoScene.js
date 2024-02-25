"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/app/Components/Model/SchoolAppLogo";

export const LogoScene = () => {
  return (
    <div className="h-screen z-10 relative">
      <Canvas
        camera={{
          fov: 30,
          position: [0, 10, 0],
        }}
      >
        <Model />
        <directionalLight intensity={3} position={[0, 20, 20]} angle={0} />
      </Canvas>
    </div>
  );
};

export default LogoScene;
