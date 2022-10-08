import dynamic from 'next/dynamic'
import Nav from '../components/dom/Nav'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})


// This is the Homepage! Here is where the react components will be loaded in - Jacob
const Page = (props) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw"}}>
      <Nav />
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
