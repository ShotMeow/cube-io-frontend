import React, { FC, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useGLTF } from "@react-three/drei";
import { PlanetGLTFType } from "@/screens/home/types/gltf.types";

const PlanetMesh: FC = () => {
  const meshRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.z += delta * 0.15;
  });

  const { nodes, materials } = useGLTF("/models/earth.gltf") as PlanetGLTFType;

  return (
    <group ref={meshRef} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.Clouds}
                  position={[0, -2, 0]}
                />
              </group>
              <group name="Planet_2">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.Planet}
                  position={[0, -2, 0]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );

  // return (
  //   <mesh ref={meshRef} position={[0, -1.5, 0]}>
  //     <sphereGeometry args={[3.3, 64, 64]} />
  //     <meshStandardMaterial color={blue[800]} />
  //   </mesh>
  // );
};

useGLTF.preload("/models/earth.gltf");
export default PlanetMesh;
