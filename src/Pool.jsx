/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Pool.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Pool = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Pool.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Water-fakecaustics">
          <group name="3x6_Swimming_Pool001">
            <mesh name="pool_body" geometry={nodes.pool_body.geometry} material={materials['pool tiles.001']} position={[0, -1, 0]} />
            <mesh name="pool_edge_tile" geometry={nodes.pool_edge_tile.geometry} material={materials['pool edge tiles.001']} position={[0, -1, 0]} />
            <group name="pool_lights" position={[-1.51, -0.2, -1.84]}>
              <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['spotlight.001']} />
              <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials['Stainless steel.001']} />
            </group>
            <mesh name="Steel_Stairs" geometry={nodes.Steel_Stairs.geometry} material={materials['Stainless steel.001']} position={[-0.98, 0.05, 1.96]} />
          </group>
        </group>
        <mesh name="Stairs" geometry={nodes.Stairs.geometry} material={materials['pool tiles.001']} position={[0, -1.05, -1.87]} scale={[2.91, 1.02, 1]} />
      </group>
    </group>
  )
}

export default Pool

useGLTF.preload('/models/Pool.gltf')
