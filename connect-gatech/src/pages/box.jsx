import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

// Step 5 - delete Instructions components
const Page = (props) => {
  return (
    <>
      <Instructions />
      <LCanvas>
        <Box/>
      </LCanvas>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
