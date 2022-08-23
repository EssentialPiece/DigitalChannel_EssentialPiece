import type { LinksFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import mainLogo from '~/assets/images/EPLogo.png';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 200
            ? setIsActive(true)
            : setIsActive(false)
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <Navbar sticky="top" expand="md" className={`justify-content-center ${isActive ? "active" : ""}`}>
            <Container className="m-2 d-flex">
                <Navbar.Brand href="/">
                    <img
                        src={mainLogo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top mx-2"
                        alt="Essential Piece Fitness LLC"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <h5 className="d-flex justify-content-start">
                        ESSENTIAL PIECE
                    </h5>
                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Link href="/">HOME</Nav.Link>
                        {/* <Nav.Link href="/about">ABOUT</Nav.Link> */}
                        <Nav.Link href="/price">PRICE</Nav.Link>
                        {/* <Nav.Link href="/blog">BLOG</Nav.Link> */}
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}