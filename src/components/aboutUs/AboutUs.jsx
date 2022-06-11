import React from 'react';
import { Container, Row } from 'react-bootstrap';

function AboutUs(props) {
    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <h1 className='display-4'>About Us</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui aperiam nulla ab iure voluptatum sit reprehenderit. Tenetur excepturi inventore delectus expedita optio cupiditate maiores deserunt nisi laborum, nam dolor.</p>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui aperiam nulla ab iure voluptatum sit reprehenderit. Tenetur excepturi inventore delectus expedita optio cupiditate maiores deserunt nisi laborum, nam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui aperiam nulla ab iure voluptatum sit reprehenderit. Tenetur excepturi inventore delectus expedita optio cupiditate maiores deserunt nisi laborum, nam dolor.</p>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui aperiam nulla ab iure voluptatum sit reprehenderit. Tenetur excepturi inventore delectus expedita optio cupiditate maiores deserunt nisi laborum, nam dolor.</p>
            </Row>
        </Container>
    );
}

export default AboutUs;