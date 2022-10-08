import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'

// Very Very basic nav / router component - Jacob

function Nav() {
    const router = useRouter()
    return <>
        <a onClick={ () => router.push("/") } style={{cursor: "pointer"}}>Go to Home </a>
        <a onClick={ () => router.push("/app") } style={{cursor: "pointer"}}>Go to App </a>

        {/* Still need to add the page for this! */}
        <a onClick={ () => router.push("/about") } style={{cursor: "pointer"}}>Go To About</a>
    </>
}

export default Nav;