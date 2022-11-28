import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const GlobeComponent = ({ route }) => {
  const router = useRouter()
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)

  const sphere = useRef()
  const light = useRef()
  const [mode, setMode] = useState(false)
  const [down, setDown] = useState(false)
  const AnimatedMaterial = a(MeshDistortMaterial)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state) => {
    //make the sphere float and follow the mouse direction
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2
      )
    }
  })


  //set up the spring, these variables will go from static to animated
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? '#673147' : mode ? '#202020' : '#E8B059',
      config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
    },
    [mode, hovered, down]
  )

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={90}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" />
      </PerspectiveCamera>
      <a.mesh
        ref={sphere}
        scale={wobble}
        onClick={() => router.push("/app")}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        // scale={hovered ? 1.1 : 1}
      >
        <sphereBufferGeometry args={[1.8, 64, 64]} />
        <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
      </a.mesh>
      <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  )
}
export default GlobeComponent