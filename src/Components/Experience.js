import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Configurator from "./Configurator";
import { MeshReflectorMaterial } from "@react-three/drei";
import Skrivbord from "../Skrivbord";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Experience = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} fullScreen>
        <model-viewer
          src="./Models/SkrivbordModelViewer.gltf"
          alt="A 3D model of an astronaut"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          environment-image="neutral"
          exposure="1"
          style={{ position: "relative", width: "100vw", height: "80vh" }}
        ></model-viewer>
      </Modal>
      <Button
        variant="default"
        style={{
          position: "absolute",
          display: "block",
          margin: "auto",
          width: "auto",
          height: "20px",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          backgroundColor: "grey",
          color: "#000000",
          border: "none",
          zIndex: "100",
          fontSize: "9px",

        }}
        onClick={() => open()}
      >
        Visa i AR
      </Button>
      <Canvas
        dpr={[1, 1.5]}
        shadows
        camera={{ position: [0, 0, 100], fov: 22 }}
      >
        <fog attach="fog" args={["#101010", 10, 20]} />
        <color attach="background" args={["#101010"]} />
        <OrbitControls
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minDistance={1}
          maxDistance={6}
        />

        <Environment preset="city" />

        <Skrivbord position={[0, -0.5, 0]} />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={0.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
          />
        </mesh>
      </Canvas>
      <Configurator />
    </>
  );
};

export default Experience;
