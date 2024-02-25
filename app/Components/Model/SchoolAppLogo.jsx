/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\SchoolAppLogo.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Model/SchoolAppLogo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Minus001.geometry}
        material={materials["Material.006"]}
        position={[-0.083, 0, 0]}
        scale={0.039}
      />
      <mesh
        geometry={nodes.Plus001.geometry}
        material={materials["Material.002"]}
        position={[-0.041, 0, 0]}
        scale={0.039}
      />
      <mesh
        geometry={nodes.School.geometry}
        material={materials["Material.003"]}
        position={[-0.041, 0, 0]}
        scale={0.039}
      />
    </group>
  );
}

useGLTF.preload("/Model/SchoolAppLogo.glb");
