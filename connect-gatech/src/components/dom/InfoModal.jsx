import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import sheet from "./styles/modal.module.css"

function InfoModal(props) {
    return (
        <div style={{width: "80vw", height: "80vh", background: "gray"}}>
            <h1 className={sheet.title}>{props.title}</h1>
            <p className={sheet.desc}>{props.desc}</p>
        </div>
    );
}

export default InfoModal;