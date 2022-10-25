import dynamic from 'next/dynamic'
import Nav from '../components/dom/Nav'
import { useRouter } from 'next/router'
import GlobeComponent from '@/components/canvas/Globe'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
// import { Points, PointMaterial } from '@react-three/drei'
// import random from 'random-esm'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const Globe = dynamic(() => import('@/components/canvas/Globe'))


// This is the Homepage! Here is where the react components will be loaded in - Jacob
const Page = (props) => {
  const router = useRouter()
  return (
      <div style={{color: "#CDD8FF", background: "linear-gradient(30deg, #CBC3E3, #030B26)", height: "180vh", fontSize: "5rem", display: "block"}}>
        {/* <Stars/> */}
        {/* <Nav></Nav> */}
          <div style={{display: "flex", width: "50%"}}>
              <p style = {{paddingLeft: "4%", fontSize: "1.8rem", marginTop: "3%"}}><b><i>connect.</i></b></p>
          </div>
          <div style={{justifyContent: "flex-end", display: "flex", marginTop: "-3%",  marginRight: "3%"}}>
              <button style={{backgroundColor: "#CDD8FF", border: "none", padding: "1.5%", 
              display: "inline-block", borderRadius: "50%"}}></button>
          </div>
          <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.4rem",  marginTop: "2%",  marginRight: "3%"}}>
              <a onClick={ () => router.push("/about") } style={{cursor: "pointer"}}><b><i>about</i></b></a>
          </div>
          <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.4rem",  marginTop: "0%", marginRight: "3%"}}>
              <a onClick={ () => router.push("/app") } style={{cursor: "pointer"}}><b><i>explore</i></b></a>
          </div>

          <div style={{paddingLeft: "20%"}}>
            <LCanvas>
            <Suspense fallback={null}>
              <Globe/>
                <Environment preset="sunset" />
            </Suspense>
            <OrbitControls />
          </LCanvas>
          </div>

          <div style={{display: "flex",paddingLeft: "15%", marginTop: "3%"}}>
              <b><i>EXPLORE</i></b>
          </div>
          <div style={{display: "flex",paddingLeft: "15%", alignItems: "center"}}>
              <b><i>GEORGIA  TECH</i></b>
          </div>
          <div style={{display: "flex",paddingLeft: "15%", alignItems: "center"}}>
              <b><i>LIKE  NEVER</i></b>
          </div>
          <div style={{display: "flex",paddingLeft: "15%", alignItems: "center"}}>
              <b><i>BEFORE</i></b>
          </div>
          {/* <div style={{display: "flex", justifyContent: "center", backgroundColor: "blue", borderRadius: "100%", height: "100vh", width: "90vw", margin: "auto", marginTop: "4%"}}> 
              <button></button>
          </div> */}
          
      </div>
  )
}

// function Stars(props) {
//   const ref = useRef()
//   // const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10
//     ref.current.rotation.y -= delta / 15
//   })
//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
//         <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
//       </Points>
//     </group>
//   )
// }

// You must export the page so it can actually be used!
export default Page


// This is the title of the page in browser!
export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}
