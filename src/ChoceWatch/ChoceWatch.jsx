import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ChoceWatch.css'


const ChoceWatch = () => {
    return (
        <>
        <Container className='choicewatch'>
            <Row className='element1'>
                <Col lg={7} md={7} sm={12}>
                <h1>watch of choice</h1>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehendeit in voluptate velit esse.</p>
                <button class="hvr-sweep-to-right">show watches</button>
                </Col>
                <Col lg={5} md={5} sm={12}>
                <img src={require("../image/gallery/choce_watch1.png")} alt="" />
                </Col>
            </Row>
            <Row className='element2'>
                <Col lg={5} md={5} sm={12}>
                <img src={require("../image/gallery/choce_watch2.png")} alt="" />
                </Col>
                <Col lg={7} md={7} sm={12}>
                <h1>watch of choice</h1>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehendeit in voluptate velit esse.</p>
                <button class="hvr-sweep-to-right">show watches</button>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default ChoceWatch
