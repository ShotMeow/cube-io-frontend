import React, { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import styles from "./PlanetCanvas.module.scss";
import PlanetMesh from "./PlanetMesh";

const PlanetCanvas: FC = () => {
  return (
    <Suspense fallback={null}>
      <span className={styles.planet}>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight position={[-30, 50, 10]} decay={0} intensity={5} />
          <PlanetMesh />
        </Canvas>
      </span>
    </Suspense>
  );
};

export default PlanetCanvas;
