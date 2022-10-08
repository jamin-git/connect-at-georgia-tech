import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const Page = (props) => {
  return (
    <>
      <LCanvas>
        <Box/>
      </LCanvas>
    </>
  )
}

export default Page

// This is the title of the page in browser!
export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
