import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Gallary.css"



const Gallary = () => {
    return (
        <>
        <Container className='gallery'>
            <Row>
                <Col className='gallery1' lg={6} sm={12}>
                <img className='img1' src={require('../image/gallery/gallery1.png')} alt="" />
                </Col>
                <Col className='gallery2' lg={3} sm={12}>
                <img className='img2' src={require('../image/gallery/gallery2.png')} alt="" />
                </Col>
                <Col className='gallery3_4' lg={3} sm={12}>
                <img className='img3' src={require('../image/gallery/gallery3.png')} alt="" />
                <img className='img4' src={require('../image/gallery/gallery4.png')} alt="" />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Gallary
