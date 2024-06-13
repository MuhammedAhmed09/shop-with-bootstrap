import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    return (
        <div className='home_bg'>
        <Container className='home'>
            <Row>
                <Col lg={7} sm={12}>
                <h1>select your new perfect style</h1>
                <p>Ut enim ad minim venam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                <button type='supmet' class="hvr-sweep-to-right">SHOPO NOW</button>
                </Col>
                <Col lg={5} sm={12}>
                <img className='img' src={require("../image/hero/watch.png")} alt="" />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home
