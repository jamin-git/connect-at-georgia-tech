import { useFrame } from '@react-three/fiber'
import { info } from 'autoprefixer';
import { useRouter } from 'next/router'
import { NotEqualDepth } from 'three';
import Info from "./Info";
import infos from "../infos";
//import styles from '../styles/about.module.css'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(props) {
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
        <p onClick={() => router.push("/")} style={{ cursor: "pointer", paddingRight: "15px" }}> home </p>
      </div>
      <div style={{ justifyContent: "flex-end", display: "flex", fontSize: "1.5rem" }}>
        <p onClick={() => router.push("/app")} style={{ cursor: "pointer", paddingRight: "15px" }}> explore </p>
      </div>
      <div className="not-italic mt-2 tracking-wide text-center text-4xl font-bold">About
        <h1 className="italic tracking-wide text-4xl text-center text-4xl font-bold">Connect! @ Georgia Tech
          <div className="not-italic text-5xl pt-6">
            Meet the Team!
            <div style={{ display: "block" }}>
              <div style={{ display: "block" }} class="text-2xl">
                {infos.map(infoItem => (
                  <Info
                    key={infoItem.key}
                    name={infoItem.name}
                    year={infoItem.year}
                    major={infoItem.major}
                  />
                ))}
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  )

}

export default About;
