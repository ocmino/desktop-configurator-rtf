import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Pool from '../Pool';

function SquareWithHole({ width, height, holeSize }) {
    const holeShape = new THREE.Shape([
      new THREE.Vector2(-holeSize / 2, -holeSize / 2),
      new THREE.Vector2(holeSize / 2, -holeSize / 2),
      new THREE.Vector2(holeSize / 2, holeSize / 2),
      new THREE.Vector2(-holeSize / 2, holeSize / 2)
    ]);
  
    const shape = new THREE.Shape([
      new THREE.Vector2(-width / 2, -height / 2),
      new THREE.Vector2(width / 2, -height / 2),
      new THREE.Vector2(width / 2, height / 2),
      new THREE.Vector2(-width / 2, height / 2)
    ]);
  
    shape.holes.push(holeShape);
  
    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
  
    return <mesh geometry={geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />;
  }
  

  function PoolWithHole(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/Pool.gltf');
    const poolEdgeTile = nodes.pool_edge_tile;
  
    const width = poolEdgeTile.geometry.parameters.width;
    const height = poolEdgeTile.geometry.parameters.height;
    const poolSize = Math.max(width, height);
  
    return (
      <group ref={group} {...props} dispose={null}>
        <SquareWithHole width={width} height={height} holeSize={poolSize * 0.25} />
        <group name="Scene">
          <group name="Water-fakecaustics">
            <group name="3x6_Swimming_Pool001">
              <mesh name="pool_body" geometry={nodes.pool_body.geometry} material={materials['pool tiles.001']} position={[0, -1, 0]} />
              <mesh name="pool_edge_tile" geometry={poolEdgeTile.geometry} material={materials['pool edge tiles.001']} position={[0, -1, 0]} />
              <group name="pool_lights" position={[-1.51, -0.2, -1.84]}>
                <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['spotlight.001']} />
                <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials['Stainless steel.001']} />
              </group>
              <mesh name="Steel_Stairs" geometry={nodes.Steel_Stairs.geometry} material={materials['Stainless steel.001']} position={[-0.98, 0.05, 1.96]} />
            </group>
          </group>
          <mesh name="Stairs" geometry={nodes.Stairs.geometry} material={materials['pool tiles.001']} position={[0, -1, 0]} />
          
        </group>
        </group>
    );
    }

    export default SquareWithHole;