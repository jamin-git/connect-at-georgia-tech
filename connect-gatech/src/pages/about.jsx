import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
//import styles from '../styles/about.module.css'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  const router = useRouter()
  return (
    // create buttons to navigate to other pages
    <div style={{ "font-weight": "bold", "height": "100vh", "backgroundColor": "#030B26", "color": "#cdd8ff" }}>
      <div class="ml-2 tracking-wide text-4xl pt-6">connect.</div>
      <div style={{ marginRight: "3.6%", "color": "#cdd8ff" }}>
      </div>

      <div style={{ justifyContent: "flex-end", display: "flex", marginTop: "-3%", marginRight: "3%" }}>
        <button style={{
          backgroundColor: "#CDD8FF", border: "none", padding: "1.75%",
          display: "inline-block", borderRadius: "50%"
        }}></button>
      </div>

      <div style={{ justifyContent: "flex-end", display: "flex", marginTop: "0.5%", marginRight: "1.6%", fontSize: "1.5rem" }}>
        <p onClick={() => router.push("/home")} style={{ cursor: "pointer", paddingRight: "15px" }}> home </p>
      </div>
      <div style={{ justifyContent: "flex-end", display: "flex", fontSize: "1.5rem" }}>
        <p onClick={() => router.push("/app")} style={{ cursor: "pointer", paddingRight: "15px" }}> explore </p>
      </div>
      <div className="not-italic mt-2 tracking-wide text-center text-4xl font-bold">About
        <h1 className="italic tracking-wide text-4xl text-center text-4xl font-bold">Connect! @ Georgia Tech
          <div className="not-italic text-3xl pt-6">
            Meet the Team!
            <div className="text-2xl pt-4 ml-2">
              <ul class="columns" data-columns="2">
                <li>Jacob</li>
                <li>Hayden</li>
                <li>Michelle</li>
                <li>Emily</li>
                <li>Stanley</li>
                <li>Josh</li>
                <li>Jackie</li>
                <li>Yeoram</li>
                <li>Ruby</li>
                <img src="" alt="" />
              </ul>
            </div>
          </div>
        </h1>
      </div>
    </div >
  )

}

export default About;