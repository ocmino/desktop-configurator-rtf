import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Pool from "../Pool";
import Configurator from "./Configurator";
import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

const Experience = () => {
  const squareHole = new THREE.Shape();

  squareHole.moveTo(0, 0);
  squareHole.lineTo(0, 1);
  squareHole.lineTo(1, 1);
  squareHole.lineTo(1, 0);
  squareHole.lineTo(0, 0);

  return (
    <>
      <Canvas
        style={{
          borderRadius: "20px",
        }}
      >
        <OrbitControls
          enablePan={true}
          maxPolarAngle={Math.PI / 2.4}
          minPolarAngle={Math.PI / 4}
        />
        <Environment preset="park" background={true} />
        <Pool position={[0, 1, 0]} />
        <mesh
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[4, 7]} />
          <MeshReflectorMaterial
            color={"#40e0d0"}
            reflectivity={0.5}
            opacity={0.5}
            transparent
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
      </Canvas>
      <Configurator />
    </>
  );
};

export default Experience;
