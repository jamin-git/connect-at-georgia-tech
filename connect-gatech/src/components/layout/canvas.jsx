import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef, useState } from 'react'

const LControl = props => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    console.log(props);
  }, [props]);

  useEffect(() => {
    if (control.current) {
      const domElement = dom.current
      const originalTouchAction = domElement.style['touch-action'] 
      domElement.style['touch-action'] = 'none'

      return () => {
        domElement.style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} enableZoom={props.enableZoom}/>
}
const LCanvas = (props) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <LControl enableZoom={props.enableZoom}/>
      <Preload all />
      {props.children}
    </Canvas>
  )
}

export default LCanvas
