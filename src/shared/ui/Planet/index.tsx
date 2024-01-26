"use client";

import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { blue } from "tailwindcss/colors";

const Planet: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-30, 50, 10]} decay={0} intensity={5} />
        <mesh position={[0, -1.5, 0]}>
          <sphereGeometry args={[3.3, 64, 64]} />
          <meshStandardMaterial color={blue["900"]} />
        </mesh>
      </Canvas>
    </Suspense>
  );
};

export default Planet;
