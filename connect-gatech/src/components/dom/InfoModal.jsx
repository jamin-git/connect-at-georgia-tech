import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'

function InfoModal(props) {
    return (
        <div style={{width: "80vw", height: "80vh", background: "red"}}>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default InfoModal;