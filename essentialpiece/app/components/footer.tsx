import { Container, Row, Col, Nav, ListGroup, Navbar } from "react-bootstrap";
import secondaryLogo from '~/assets/images/EPLogo2.png';
import nasmLogo from '~/assets/images/NASMLogo.png';

var blogs = [
    { title: "Blog1", url: "" },
    { title: "Blog2", url: "" },
    { title: "Blog3", url: "" },
    { title: "Blog4", url: "" },
    { title: "Blog5", url: "" }
]

export default function Footer() {
    return (    
        <Container fluid className="mt-auto footer">
            <Row md={5}>
                <Col sm={12} md={4} id="col">
                    <Nav.Link href="/" id="logo">
                        <img
                            src={secondaryLogo}
                            width="30%"
                            alt="Essential Piece Fitness LLC"
                        />
                        ESSENTIAL PIECE
                    </Nav.Link>
                    <div id="epStatement">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                    <a href="" className="socialMediaIcons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6EC9BE" className="bi bi-facebook" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </a>
                    <a href="" className="socialMediaIcons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6EC9BE" className="bi bi-twitter" viewBox="0 0 16 16">
                            {/* <circle cx="8" cy="8" r="11"/> */}
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </a>
                </Col>
                <Col sm={12} id="smallCol">
                    <h5 id="firstCol">OUR COMPANY</h5>
                    <Nav className="flex-column" as="ul">
                        <Nav.Link href="/about">• About Us</Nav.Link>
                        <Nav.Link href="/price">• Pricing</Nav.Link>
                        <Nav.Link href="">• FAQ</Nav.Link>
                        <Nav.Link href="/contact">• Contact</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={12} id="smallCol">
                    <h5>OUR BLOG</h5>
                    <Nav className="flex-column" as="ul">
                        <Nav.Link href={blogs[0].url}>• {blogs[0].title}</Nav.Link>
                        <Nav.Link href={blogs[1].url}>• {blogs[1].title}</Nav.Link>
                        <Nav.Link href={blogs[2].url}>• {blogs[2].title}</Nav.Link>
                        <Nav.Link href={blogs[3].url}>• {blogs[3].title}</Nav.Link>
                        <Nav.Link href={blogs[4].url}>• {blogs[4].title}</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={12} className="flex-grow-1" id="smallCol">
                    <h5>CERTIFICATION</h5>
                    <img
                        src={nasmLogo}
                        alt="National Academy of Sports Medicine"
                        width="80%"
                    />
                    <Nav.Link href="" id="inquire">
                        INQUIRE FOR A SESSION
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6EC9BE" className="bi bi-arrow-right" viewBox="-5 0 20 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </Nav.Link>
                </Col>
                <div className="flex-grow-1" id="copyright">© ESSENTIAL PIECE {new Date().getFullYear()}. All rights reserved.</div>
            </Row>  
        </Container>
    );
}