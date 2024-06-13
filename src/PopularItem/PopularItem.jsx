import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './PopularItem.css'



const PopularItem = () => {
    return (
        <>
        <Container className='popularitem'>
        <p className='popularitem_p'>Popular Item</p>
        <h6>Consecterut adipiscing elit, sed do eiusmod tempor incididuct ut dobore et dolore magna aliqua.</h6>
        <h6>Quis iqsum suspensisse ultices gravida.</h6>
            <Row>
                <Col lg={4} sm={12}>
                <div className='cartimage'>
                    <img src={require('../image/gallery/popular1.png')} alt="" />
                    <h6 className='button'>add to cart</h6>
                </div>
                <h5>thermo ball etip golves</h5>
                <p className='price'>$ 45.743</p>
                </Col>
                <Col lg={4} sm={12}>
                <div className='cartimage'>
                    <img src={require('../image/gallery/popular2.png')} alt="" />
                    <h6 className='button'>add to cart</h6>
                </div>
                <h5>thermo ball etip golves</h5>
                <p className='price'>$ 45.743</p>
                </Col>
                <Col lg={4} sm={12}>
                <div className='cartimage'>
                    <img src={require('../image/gallery/popular3.png')} alt="" />
                    <h6 className='button'>add to cart</h6>
                </div>
                <h5>thermo ball etip golves</h5>
                <p className='price'>$ 45.743</p>
                </Col>                
            </Row>
            <Row>
                <Col lg={4} sm={12}>
                <div className='cartimage'>
                    <img src={require('../image/gallery/popular4.png')} alt="" />
                    <h6 className='button'>add to cart</h6>
                </div>
                <h5>thermo ball etip golves</h5>
                <p className='price'>$ 45.743</p>
                </Col>
                <Col lg={4} sm={12}>
                <div className='cartimage'>
                    <img src={require('../image/gallery/popular5.png')} alt="" />
                    <h6 className='button'>add to cart</h6>
                </div>
                <h5>thermo ball etip golves</h5>
                <p className='price'>$ 45.743</p>
                </Col>
                <Col lg={4} sm={12}>
                <div className='cartimage'>
                    <img src={require('../image/gallery/popular6.png')} alt="" />
                    <h6 className='button'>add to cart</h6>
                </div>
                <h5>thermo ball etip golves</h5>
                <p className='price'>$ 45.743</p>
                </Col>                
            </Row>
            
        </Container>
        </>
    )
}

export default PopularItem
