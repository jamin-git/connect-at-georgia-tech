import dynamic from 'next/dynamic'
import Nav from '../components/dom/Nav'
import { useRouter } from 'next/router'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})


const Page = (props) => {
  const router = useRouter()
  return (
    <div style={{color: "#CDD8FF", backgroundColor: "#030B26", height: "100vh", fontSize: "4rem", display: "block"}}>
          <div style={{display: "flex", width: "50%"}}>
              <p style = {{paddingLeft: "4%", fontSize: "2.5rem"}}><b>connect.</b></p>
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
      title: 'About',
    },
  }
}
