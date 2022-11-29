import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import sheet from "./styles/modal.module.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InfoModal(props) {
    return (
        <Container style={{width: "90vw", height: "75vh"}}>
            <Row style={{height: "5vh", paddingBottom:"6%"}}>
                <h1 className={sheet.heading}>{props.title}</h1>
            </Row>
            <Row>
                {/* Left Side */}
                <Col>
                    <Row style={{height: "30vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>Description</h1>
                            <p> {props.desc} </p>
                        </div>
                    </Row>
                    <Row style={{height: "12vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>Buzzcard Access</h1>
                            <p> {props.buzzcard} </p>
                        </div>
                    </Row>
                    <Row style={{height: "12vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>Vending Machine</h1>
                            <p>{props.vending}</p>
                        </div>
                    </Row>
                    <Row style={{height: "12vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>Microwaves</h1>
                            <p>{props.microwave}</p>
                        </div>
                    </Row>
                </Col>
                {/* Right Side */}
                <Col className={sheet.imgcontainer}>
                    <img src="https://tinyurl.com/msbfw2pd" className={sheet.img}></img>
                </Col>
            </Row>
        </Container>
        // <div style={{width: "80vw", height: "80vh", background: "gray"}}>
        //     <h1 className={sheet.title}>{props.title}</h1>
        //     <p className={sheet.desc}>{props.desc}</p>
        // </div>
    );
}

export default InfoModal;