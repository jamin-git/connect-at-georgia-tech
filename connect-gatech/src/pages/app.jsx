// This is a super basic app page. I created a model component with and old GT model I had - Jacob
// This can also serve as a general skeleton to how a page with r3f components

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Nav from "../components/dom/Nav";


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

// This is the App Page
function App(props) {
  return (
    <>
    {/* Nav bar is not working properly here */}
    <div className="h-screen" style={{color: "#CDD8FF", background: "linear-gradient(30deg, #CBC3E3, #030B26)"}}>
      <Nav/>
      <div>
        <LCanvas>
          <Suspense fallback={null}>
            {/* <Box/> */}
              {/* <Marker scale={0.5}/> */}
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
