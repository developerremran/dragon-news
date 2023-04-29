import React from 'react';
import Header from './Layouts/Sheard/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RIghtNav from './Layouts/Sheard/NavBers/RIghtNav';
import Footer from './Layouts/Sheard/Footer/Footer';
import { Outlet } from 'react-router-dom';


const SingleNewsLayouts = () => {
    return (
        <div>
             <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
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

export default SingleNewsLayouts;