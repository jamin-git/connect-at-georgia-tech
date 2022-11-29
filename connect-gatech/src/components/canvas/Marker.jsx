import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Marker(props) {
  const { nodes, materials } = useGLTF("/models/Location_Marker.gltf");

  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload("/models/Location_Marker.gltf");

export default Marker;