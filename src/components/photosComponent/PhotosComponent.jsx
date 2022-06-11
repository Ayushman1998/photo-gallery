import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Photos.css'
import axios from 'axios';

class PhotosComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            showPhotos: false,
        };
    }


    componentDidMount() {
        axios.get('https://picsum.photos/v2/list')
            .then(response =>
                // handle success
                // console.log(response.data);
                this.setState({
                    photos: response.data
                })
            )
            .catch((error) => console.log(error.message));


        // const fetchphotos = async () => {
        //     try {
        //         let res = await axios.get('https://picsum.photos/v2/list');
        //         this.setState({
        //             photos: res.data,
        //         })
        //         console.log(res);
        //     } catch (err) {
        //         console.log(err.message);
        //     }

        // }
        // fetchphotos();
    }

    showHidePhotos = () => {
        this.setState((prevState) => ({
            showPhotos: !prevState.showPhotos,
        }))
    }

    render() {
        let { photos, showPhotos } = this.state;
        return (
            <Container style={{ marginTop: "20px" }}>

                <Row>
                    <Col md={10}>
                        <h1 className='display-4' style={{ textAlign: "left" }}>Photos</h1>
                        <p className='lead' style={{ textAlign: "left" }}>Explore range of Images</p>
                    </Col>

                    <Col md={2}>
                        <Button variant='dark' size='lg' onClick={this.showHidePhotos}>
                            {showPhotos ? 'Hide' : 'Show'} Images
                        </Button>
                    </Col>
                </Row>

                <hr></hr>

                <Row>

                    {showPhotos && photos.map(photo => (
                        <Col md={3} className="photos-card" key={photo.id}>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={photo.download_url} />
                                <Card.Body>
                                    <Card.Title>{photo.author}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="dark">View Details</Button>
                                    <a className='btn btn-dark' href={photo.url}>View Details</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>
        );
    }
}

export default PhotosComponent;