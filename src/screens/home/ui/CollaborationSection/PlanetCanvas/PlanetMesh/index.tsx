import { FC, useRef } from "react";

import { blue } from "tailwindcss/colors";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const PlanetMesh: FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.05;
    meshRef.current.rotation.y += delta * 0.05;
    meshRef.current.rotation.z += delta * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, -1.5, 0]}>
      <sphereGeometry args={[3.3, 64, 64]} />
      <meshStandardMaterial color={blue[800]} />
    </mesh>
  );
};

export default PlanetMesh;
