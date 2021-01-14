import React from "react"
import { Navbar, Nav } from "react-bootstrap"

function Navi() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand href="/">COVID STATS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-2">
                    <Nav.Link href="/US" className="ml-3">
                        US
                    </Nav.Link>
                    <Nav.Link href="/EU" className="ml-3">
                        EU
                    </Nav.Link>
                    <Nav.Link href="/Global" className="ml-3">
                        Global
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navi
