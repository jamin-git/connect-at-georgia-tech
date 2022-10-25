import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
// import './Nav.css';

// Very Very basic nav / router component - Jacob

function Nav() {
    const router = useRouter()
    return <div style={{color: "#CDD8FF", backgroundColor: "#030B26", height: "100vh", fontSize: "4rem", display: "block"}}>
        <div style = {{paddingLeft: "4%", fontSize: "2.5rem"}}>
            <a onClick={ () => router.push("/") } stype={{cursor: "pointer"}}>connect. </a>
        </div>
        <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.6rem",  marginTop: "1%",  marginRight: "3%"}}>
            <a onClick={ () => router.push("/app") } style={{cursor: "pointer"}}>explore</a>
        </div>
        <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.6rem",  marginTop: "0%", marginRight: "3%"}}>
            <a onClick={ () => router.push("/about") } style={{cursor: "pointer"}}>about</a>
        </div>
    </div>
}


export default Nav;