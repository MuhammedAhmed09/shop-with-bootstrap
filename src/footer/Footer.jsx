import React from 'react'
import './Footer.css'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { BsBox } from "react-icons/bs";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { GoSync } from "react-icons/go";
import { PiCopyrightThin } from "react-icons/pi";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";





const Footer = () => {
    return (
        <>
        <Container className='sec-1'>
            <Row>
                <Col lg={4} md={4} sm={12}>
                <p className='icon'><BsBox /></p>
                <h4>what of choice watch of choice</h4>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <p className='icon'><FaUnlockKeyhole /></p>
                <h4>what of choice watch of choice</h4>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <p className='icon'><GoSync /></p>
                <h4>what of choice watch of choice</h4>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </Col>
            </Row>
        </Container>
        <Container className='sec-2'>
            <Row>
                <Col lg={3} md={3} sm={12}>
                <img src={require('../image/logo/logo2_footer.png')} alt="" />
                <hr />
                <p>Itaque sit necessitatibus sed nobis unde, facere consectetur odio provident maiores maxime.</p>
                </Col>
                <Col lg={3} md={3} sm={12}>
                <h4>quick links</h4>
                <NavLink href='#'>about</NavLink>
                <NavLink href='#'>offers & discounts</NavLink>
                <NavLink href='#'>get coupon</NavLink>
                <NavLink href='#'>contact us</NavLink>
                </Col>
                <Col lg={3} md={3} sm={12}>
                <h4>new products</h4>
                <NavLink href='#'>woman cloth</NavLink>
                <NavLink href='#'>fashion accessories</NavLink>
                <NavLink href='#'>man accessories</NavLink>
                <NavLink href='#'>rubber made toys</NavLink>
                </Col>                
                <Col lg={3} md={3} sm={12}>
                <h4>support</h4>
                <NavLink href='#'>frequently asked questions</NavLink>
                <NavLink href='#'>terms & conditions</NavLink>
                <NavLink href='#'>privacy policy</NavLink>
                <NavLink href='#'>report a payment issue</NavLink>
                </Col>
            </Row>
        </Container>
        <Container className='sec-3'>
            <Row>
                <Col lg={8} md={8} sm={12}>
                Copyright <span><PiCopyrightThin /></span> 2021 All right reservd | This template is made by <b>Eng/ Muhammed Ahmed (BA7R)</b>
                </Col>
                <Col lg={4} md={4} sm={12} className='links'>
                <NavLink href='#'><p><IoLogoTwitter /></p></NavLink>
                <NavLink href='#'><p><FaFacebookF /></p></NavLink>
                <NavLink href='#'><p><FaLinkedin /></p></NavLink>
                <NavLink href='#'><p><FaGlobe /></p></NavLink>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Footer
