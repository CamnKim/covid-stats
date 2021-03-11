import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand as={Link} to="/">COVID STATS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-2">
                    <Nav.Link as={Link} to="/US" className="ml-3">
                        US
                    </Nav.Link>
                    <Nav.Link as={Link} to="/About" className="ml-3">
                        About
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )
}

export default Navigation
