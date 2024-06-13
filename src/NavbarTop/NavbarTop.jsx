import React from 'react'
import { Container,
    Navbar, 
    Nav,
    NavLink, 
    NavDropdown,
} from 'react-bootstrap'
import './NavbarTop.css'

const NavbarTop = () => {
return (
    <div className='sticky'>
        {/* j */}
        <Navbar expand='lg' bg='light' className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home"><img src={require("../image/logo/logo.png")} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#link">Link</NavLink>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
                <NavLink href="#home">Home</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
)
}

export default NavbarTop
