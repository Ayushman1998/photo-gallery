import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ContactUs(props) {
    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <h1 className='display-4'>Contact Us</h1>
            </Row>

            <Row style={{ marginTop: "80px" }}>
                <Col style={{ textAlign: "left" }}>
                    <p className='lead' style={{ textAlign: "center", fontWeight: "bold" }}>Call Us:</p>
                    <p className='lead' style={{ textAlign: "center" }}>+919876543210</p>
                    <p className='lead' style={{ textAlign: "center" }}>or</p>
                    <p className='lead' style={{ textAlign: "center" }}>1800-0000-0000</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                    <p className='lead' style={{ textAlign: "center", fontWeight: "bold" }}>Mail Us:</p>
                    <p className='lead' style={{ textAlign: "center" }}>helpdesk@photogallery.com</p>
                    <p className='lead' style={{ textAlign: "center" }}>or</p>
                    <p className='lead' style={{ textAlign: "center" }}>support@photogallery.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;