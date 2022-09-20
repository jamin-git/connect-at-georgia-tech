import React from "react";
import { Canvas } from '@react-three/fiber'
import './app.css';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
