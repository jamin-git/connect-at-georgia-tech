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
                    <Row style={{height: "15vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>General Occupancy</h1>
                            <p>High</p>
                        </div>
                    </Row>
                    <Row style={{height: "15vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>Club Meetings</h1>
                            <p>All of them</p>
                        </div>
                    </Row>
                    <Row style={{height: "15vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>Available Food</h1>
                            <p>Vending Machines</p>
                        </div>
                    </Row>
                    <Row style={{height: "15vh"}}>
                        <div>
                            <h1 className={sheet.subheading}>Buzzcard Access</h1>
                            <p>Available</p>
                        </div>
                    </Row>
                </Col>
                {/* Right Side */}
                <Col className={sheet.imgcontainer}>
                    <img src="https://http.cat/202" className={sheet.img}></img>
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