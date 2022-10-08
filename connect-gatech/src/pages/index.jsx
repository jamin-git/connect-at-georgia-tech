import dynamic from 'next/dynamic'
import Nav from '../components/dom/Nav'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})


// This is the Homepage - Jacob
const Page = (props) => {
  return (
    <>
      <Nav />
    </>
  )
}

export default Page


// This is the title of the page in browser!
export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}
