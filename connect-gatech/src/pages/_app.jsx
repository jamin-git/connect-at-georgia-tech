import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'
import "@fancyapps/ui/dist/fancybox.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

function App({ Component, pageProps = { title: 'index' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Dom>
        <Component {...pageProps} />
      </Dom>
    </>
  )
}

export default App
