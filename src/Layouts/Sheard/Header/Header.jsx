import React from 'react';
import moment from 'moment';
import { Button, Container, Nav,Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-2 mb-5'>
                <img src={'/src/assets/logo/logo.png'} alt="" />
                <h3 className='py-2 mb-4 text-dark'><small>Journalism Without Fear or Favour</small>
                    <p>{moment().format("dddd, MMMM D YYYY")}</p>
                </h3>
            </div>
            <div className='d-flex bg-secondary'>
                <Button variant="danger">Latest..</Button>
                <Marquee className='text-light fw-bold' speed={90}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            <div>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="gray">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto fw-semibold fs-4">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Done</Nav.Link>
                            
                            </Nav>
                            <Nav className='d-flex align-items-center'>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">LogIn</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;