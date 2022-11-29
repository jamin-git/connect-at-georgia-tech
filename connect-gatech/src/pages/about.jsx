// import { useFrame } from '@react-three/fiber'
// import { info } from 'autoprefixer';
// import { useRouter } from 'next/router'
// import { NotEqualDepth } from 'three';
import * as THREE from 'three'
import Info from "../components/dom/Info";
import infos from "../database/infos";
import Nav1 from '../components/dom/Nav1'
import React, { useState } from "react";

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const Ufo = dynamic(() => import('@/components/canvas/Ufo'), {
  ssr: false,
})


function About() {
  return (
    // create buttons to navigate to other pages
    <div style={{ color: "#CDD8FF", background: "linear-gradient(30deg, #CBC3E3, #030B26)", height: "180vh", fontSize: "5rem", display: "block" }}>
      <div style={{ zIndex: 10, position: "relative" }}><Nav1 /></div>

      <div style={{ color: "aqua" }}>
        <LCanvas enableZoom={false}>
          <OrthographicCamera makeDefault zoom={3.7} position={[0, 20, 200]} fov={20} />
          <Suspense fallback={null}>
            <Ufo />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls />
        </LCanvas>
      </div>

      <div style={{ zIndex: 10, position: "relative" }}>
        {/* <div className="not-italic mt-2 tracking-wide text-center text-4xl font-bold z-10">About
        <h1 className="italic tracking-wide text-4xl text-center text-4xl font-bold">Connect! @ Georgia Tech */}
        <div style={{ fontFamily: "Bitter", marginLeft: "46%", position: "absolute", textAlign: "center", justifyContent: "center", marginTop: "12%" }} class="text-black col-start-5 col-end-6 font-bold text-center text-8xl m-7">gt://</div>
        <div style={{ display: "block" }} class="text-3xl text-center text-gray-900">
          <div style={{ color: "#CDD8FF" }} class="grid grid-rows-9 grid-cols-14 grid-flow-col gap-3 text-center mt-10 italic">
            <div class="col-start-1 col-end-4 font-bold">Jacob Amin</div>
            <h1 class="col-start-1 col-end-4 text-2xl"> 4th year Computational Media major</h1>
            <div class="col-start-1 col-end-4 font-bold">Michelle Lee</div>
            <h1 class="col-start-1 col-end-4 text-2xl"> 3rd year Computer Science major</h1>
            <div class="col-start-1 col-end-4 font-bold">Stanley Wong</div>
            <h1 class="col-start-1 col-end-4 text-2xl"> 2nd year Computer Science major </h1>
            <div class="col-start-1 col-end-4 font-bold">Emily Cai</div>
            <h1 class="col-start-1 col-end-4 text-2xl"> 2nd year Computer Science major</h1>
            <div class="col-start-1 col-end-4 font-bold">Ruby Yu</div>
            <h1 class="col-start-1 col-end-4 text-2xl">1st year Computer Science major</h1>
            <div class="col-start-7 col-end-10 font-bold">Yeoram Seo</div>
            <h1 class="col-start-7 col-end-10 text-2xl"> 1st year Computer Science major</h1>
            <div class="col-start-7 col-end-10 font-bold">Hayden Carpenter</div>
            <h1 class="col-start-7 col-end-10 text-2xl"> 1st year Computer Science major</h1>
            <div class="col-start-7 col-end-10 font-bold">Josh Samuel</div>
            <h1 class="col-start-7 col-end-10 text-2xl"> d year Computer Science major</h1>
            <div class="col-start-7 col-end-10 font-bold">Tianrun Wu</div>
            <h1 class="col-start-7 col-end-10 text-2xl"> 3rd year Architecture major</h1>

          </div>
        </div>
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