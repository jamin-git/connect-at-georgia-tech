import dynamic from 'next/dynamic'
import Nav from '../components/dom/Nav'
import { useRouter } from 'next/router'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})


const Page = (props) => {
  const router = useRouter()
  return (
    <Nav/>
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
