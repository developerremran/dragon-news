import React from 'react';
import Header from './Sheard/Header/Header';
import Footer from './Sheard/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './Sheard/NavBers/LeftNav';
import RIghtNav from './Sheard/NavBers/RIghtNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RIghtNav></RIghtNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;