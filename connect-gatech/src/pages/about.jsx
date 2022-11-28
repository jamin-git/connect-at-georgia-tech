// import { useFrame } from '@react-three/fiber'
// import { info } from 'autoprefixer';
// import { useRouter } from 'next/router'
// import { NotEqualDepth } from 'three';
import * as THREE from 'three'
import Info from "../components/dom/Info";
import infos from "../database/infos";
import Nav from '../components/dom/Nav'
import React, { useState } from "react";

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'



const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const Ufo = dynamic(() => import('@/components/canvas/Ufo'), {
  ssr: false,
})


function About() {
  return (
    // create buttons to navigate to other pages
    <div style={{color: "#CDD8FF", background: "linear-gradient(30deg, #CBC3E3, #030B26)", height: "180vh", fontSize: "5rem", display: "block"}}>
      <div style={{zIndex: 10, position: "relative"}}><Nav/></div>

      <div >
        <LCanvas enableZoom={false}>
        <OrthographicCamera makeDefault zoom={3.7} position={[0, 20, 200]} fov={20}/>
          <Suspense fallback={null}>
              <Ufo />
              <Environment preset="sunset" />
          </Suspense>
          <OrbitControls />
        </LCanvas>
      </div>

      <div style={{zIndex: 10, position: "relative"}}>
      {/* <div className="not-italic mt-2 tracking-wide text-center text-4xl font-bold z-10">About
        <h1 className="italic tracking-wide text-4xl text-center text-4xl font-bold">Connect! @ Georgia Tech */}
          <div className=" text-center text-4xl not-italic text-5xl font-bold">
            Meet the Team!
            <div style={{ display: "block" }}>
              <div style={{ display: "block" }} class="text-2xl">
                {infos.map(infoItem => (
                  <Info
                    key={infoItem.key}
                    name={infoItem.name}
                    year={infoItem.year}
                    major={infoItem.major}
                  />
                ))}
              </div>
            </div>
          </div>
        {/* </h1>
      </div> */}
      </div>
      
    </div>
  )

}

export default About

export async function getStaticProps() {
  return {
    props: {
      title: 'About',
    },
  }
}