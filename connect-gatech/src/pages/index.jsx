import dynamic from 'next/dynamic'
import Nav from '../components/dom/Nav'
import { useRouter } from 'next/router'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})


// This is the Homepage! Here is where the react components will be loaded in - Jacob
const Page = (props) => {
  const router = useRouter()
  return (
      <div style={{color: "#CDD8FF", backgroundColor: "#030B26", height: "100vh", fontSize: "4rem", display: "block"}}>
          <div style={{display: "flex", width: "50%"}}>
              <p style = {{paddingLeft: "4%", fontSize: "2.5rem"}}><b>connect.</b></p>
          </div>
          <div style={{justifyContent: "flex-end", display: "flex", marginTop: "-3%",  marginRight: "3%"}}>
              <button style={{backgroundColor: "#CDD8FF", border: "none", padding: "1.5%", 
              display: "inline-block", borderRadius: "50%"}}></button>
          </div>
          <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.6rem",  marginTop: "1%",  marginRight: "3%"}}>
              <a onClick={ () => router.push("/about") } style={{cursor: "pointer"}}>about</a>
          </div>
          <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.6rem",  marginTop: "0%", marginRight: "3%"}}>
              <a onClick={ () => router.push("/app") } style={{cursor: "pointer"}}>explore</a>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "6%"}}>
              <b><i>EXPLORE GEORGIA TECH</i></b>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <b><i>LIKE NEVER BEFORE</i></b>
          </div>
          <div style={{display: "flex", justifyContent: "center", backgroundColor: "blue", borderRadius: "100%", height: "100vh", width: "90vw", margin: "auto", marginTop: "4%"}}> 
              <button></button>
          </div>
      </div>
  )
}

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
