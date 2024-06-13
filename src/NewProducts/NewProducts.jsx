import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './NewProducts.css'

const NewProducts = () => {
    return (
        <>
        <Container className='products'>
        <p className='h1'>new porducts</p>
            <Row>
                <Col lg={4} sm={12} className='box'>                
                <img src={require('../image/gallery/new_product1.png')} alt="" />
                <h5>product1</h5>
                <p className='price'>$50.500</p>
                </Col>
                <Col lg={4} sm={12} className='box'>
                <img src={require('../image/gallery/new_product2.png')} alt="" />
                <h5>product2</h5>
                <p className='price'>$50.500</p>
                </Col>
                <Col lg={4} sm={12} className='box'>
                <img src={require('../image/gallery/new_product3.png')} alt="" />
                <h5>product3</h5>
                <p className='price'>$50.500</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default NewProducts
