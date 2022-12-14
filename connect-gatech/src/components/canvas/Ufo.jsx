import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

export function Ufo(props) {
  const { nodes, materials } = useGLTF("models/ufo.gltf");
  const ufoMesh = useRef();
  useFrame(({clock }) => {
    ufoMesh.current.position.y = ((Math.sin(clock.getElapsedTime())) * 5) - 20 ;
  })
  
  return (
    <group {...props} dispose={null} position={[0, -20, 0]} ref={ufoMesh}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.littleglasses.geometry}
        material={nodes.littleglasses.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ringbottom.geometry}
        material={nodes.ringbottom.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={nodes.glass.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ringtop.geometry}
        material={nodes.ringtop.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light.geometry}
        material={nodes.light.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.saucer.geometry}
        material={nodes.saucer.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.littleglasses001.geometry}
        material={nodes.littleglasses001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ringbottom001.geometry}
        material={nodes.ringbottom001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass001.geometry}
        material={nodes.glass001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ringtop001.geometry}
        material={nodes.ringtop001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light001.geometry}
        material={nodes.light001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.saucer001.geometry}
        material={nodes.saucer001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.littleglasses002.geometry}
        material={nodes.littleglasses002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ringbottom002.geometry}
        material={nodes.ringbottom002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass002.geometry}
        material={nodes.glass002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ringtop002.geometry}
        material={nodes.ringtop002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light002.geometry}
        material={nodes.light002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.saucer002.geometry}
        material={nodes.saucer002.material}
      />
    </group>
  );
}

useGLTF.preload("/models/ufo.gltf");

export default Ufo;