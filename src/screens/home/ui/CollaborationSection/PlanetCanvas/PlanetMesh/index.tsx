import React, { FC, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useGLTF } from "@react-three/drei";

import { PlanetGLTFType } from "../../../../types/gltf.types";

const PlanetMesh: FC = () => {
  const meshRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.z += delta * 0.1;
  });

  const { nodes, materials } = useGLTF("/models/earth.gltf") as PlanetGLTFType;

  return (
    <group ref={meshRef} dispose={null} rotation={[0, 0, 0]}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Clouds}
        position={[0, -2, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Planet}
        position={[0, -2, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/earth.gltf");
export default PlanetMesh;
