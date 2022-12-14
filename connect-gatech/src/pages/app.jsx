// This is a super basic app page. I created a model component with and old GT model I had - Jacob
// This can also serve as a general skeleton to how a page with r3f components

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Nav from "../components/dom/Nav";
import InfoModal from "../components/dom/InfoModal";
import React from 'react';
import Swal from 'sweetalert2'
import { Fancybox } from "@fancyapps/ui";


// Importing Data
import buildingInfo from "../database/buildingInfo"



const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const Map = dynamic(() => import('@/components/canvas/Map'), {
  ssr: false,
})

const Marker = dynamic(() => import('@/components/canvas/Marker'), {
  ssr: false,
})

const Box = dynamic(() => import('@/components/canvas/Box'))

function setTrigger(isClicked) {
  Swal.fire({
    title: 'Culc',
    text: 'This is the main study building on campus',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}

// This will trigger the pop up modal. the "id" parameter is the id tag that you associate with the modal
function setTrigger2(id) {
  Fancybox.show([{ 
    src:  id,
    type: "clone" }]);
}

// This is the App Page
function App(props) {
  return (
    <>

    {/* You must place modals here! (So they won't display on the page) Additionally, you must have a corresponding id tag for each modal. */}
    <div style={{display: "none"}}>
      {buildingInfo.map(buildingItem => (
        <div id={buildingItem.id}>
          <InfoModal
            key={buildingItem.key}
            title={buildingItem.title}
            desc={buildingItem.desc}
            microwave={buildingItem.microwave} 
            buzzcard={buildingItem.buzzcard}
            vending={buildingItem.vending}
            imgurl={buildingItem.imgurl}
            />
        </div>
      ))}
    </div>


    {/* Nav bar is not working properly here */}
    <div className="h-screen" style={{color: "#CDD8FF", background: "linear-gradient(30deg, #CBC3E3, #030B26)"}}>
      <div style={{zIndex: 10, position: "relative"}}><Nav/></div>
      <div>
        <LCanvas>
          <Suspense fallback={null}>
            {/* <Box/> */}
              <Marker scale={1} position={[0.7, 0.3, 0.6]} onClick={(e) => setTrigger2("#culc")}/>
              <Marker scale={1} position={[-0.1, 0.2, 0.4]} onClick={(e) => setTrigger2("#techgreen")}/>
              <Marker scale={1} position={[-6.677, 0.3, -1.174]} onClick={(e) => setTrigger2("#crc")}/>
              <Marker scale={1} position={[1, 0.3, -2.3]} onClick={(e) => setTrigger2("#klaus")}/>
              <Marker scale={1} position={[-1.5, 0.3, 1]} onClick={(e) => setTrigger2("#studentcenter")}/>
              <Marker scale={1} position={[-5.3, 0.3, 0.3]} onClick={(e) => setTrigger2("#stamps")}/>
              <Marker scale={1} position={[0.7, 0.3, 1.6]} onClick={(e) => setTrigger2("#skiles")}/>
              <Marker scale={1} position={[0.1, 0.2, -1]} onClick={(e) => setTrigger2("#vanleer")}/>
              <Marker scale={1} position={[-1.3, 0.3, -2.7]} onClick={(e) => setTrigger2("#howey")}/>
              <Marker scale={1} position={[1.9, 0.3, 1]} onClick={(e) => setTrigger2("#crosland")}/>
              <Marker scale={1} position={[1.4, 0.3, 0.7]} onClick={(e) => setTrigger2("#gilbert")}/>
              <Marker scale={1} position={[5.5, 0.3, 2.8]} onClick={(e) => setTrigger2("#brittain")}/>
              <Marker scale={1} position={[-7.5, 0.3, -4.5]} onClick={(e) => setTrigger2("#willage")}/>
              <Marker scale={1} position={[5.8, 0.3, 5]} onClick={(e) => setTrigger2("#nav")}/>
              <Map scale={.01} />
              <Environment preset="sunset" />
          </Suspense>
          <OrbitControls />
        </LCanvas>
      </div>
    </div>
    </>
  )
}

export default App

export async function getStaticProps() {
  return {
    props: {
      title: 'Model',
    },
  }
}
