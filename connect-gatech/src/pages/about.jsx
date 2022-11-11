// import { useFrame } from '@react-three/fiber'
// import { info } from 'autoprefixer';
// import { useRouter } from 'next/router'
// import { NotEqualDepth } from 'three';
// import Info from "./Info";
// import infos from "../infos";
import Nav from '../components/dom/Nav'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'


const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const Ufo = dynamic(() => import('@/components/canvas/Ufo'), {
  ssr: false,
})

//import styles from '../styles/about.module.css'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(props) {
  return (
    // create buttons to navigate to other pages
    <div style={{color: "#CDD8FF", background: "linear-gradient(30deg, #CBC3E3, #030B26)", height: "180vh", fontSize: "5rem", display: "block"}}>
      <Nav className="z-10"/>

      <div>
        <LCanvas enableZoom={false}>
        <OrthographicCamera makeDefault zoom={1} />
          <Suspense fallback={null}>
              <Ufo scale={1.0}/>
              <Environment preset="sunset" />
          </Suspense>
          <OrbitControls />
        </LCanvas>
      </div>

      {/* <div className="not-italic mt-2 tracking-wide text-center text-4xl font-bold">About
        <h1 className="italic tracking-wide text-4xl text-center text-4xl font-bold">Connect! @ Georgia Tech
          <div className="not-italic text-5xl pt-6">
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
        </h1>
      </div> */}
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