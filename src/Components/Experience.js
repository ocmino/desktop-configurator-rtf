import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PahlenPool from "../PahlenPool";
import Pool from "../Pool";
import Configurator from "./Configurator";
import Configurator2 from "./Configurator2";

const Experience = () => {
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
          minDistance={4.5}
          maxDistance={10}
        />
        <Environment preset="park" background={true} />

        <Pool position={[0, 1, 0]} />
      </Canvas>
      <Configurator />
    </>
  );
};

export default Experience;