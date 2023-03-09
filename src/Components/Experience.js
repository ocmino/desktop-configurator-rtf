import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Configurator from "./Configurator";
import { MeshReflectorMaterial } from "@react-three/drei";
import Skrivbord from "../Skrivbord";


const Experience = () => {
  return (
    <>
        <Canvas dpr={[1, 1.5]} shadows camera={{ position: [0, 0, 100], fov: 22 }}>
        <fog attach="fog" args={['#f0f0f0', 100, 150]} />
        <color attach="background" args={['#f0f0f0']} />
        <OrbitControls
          enablePan={true}
          maxPolarAngle={Math.PI / 2.5} 
          minDistance={1}
          maxDistance={6}
        />
       
        <Environment preset="city" />
        
        <Skrivbord position={[0, -0.5, 0]} />
        <mesh rotation={[-Math.PI / 2, 0, 0] } position={[0, -0.5, 0]} receiveShadow>
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
