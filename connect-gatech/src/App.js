import React from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import './app.css';

function Cube() {

  // Accessing the mesh within the cube component
  const meshRef = useRef(null);

  // React Hook. Every frame the component will do this. (Similar to an update() function)
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  // What the component displays / returns
  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry attach='geometry' args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial attach='material' />
    </mesh>
  );
}


function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Cube />
      </Canvas>
    </>
  );
}

export default App;
