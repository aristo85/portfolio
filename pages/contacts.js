import React, {Component} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { FaPhoneSquareAlt, FaEnvelopeSquare, FaSkype, FaFacebookSquare, FaVk } from 'react-icons/fa';


class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-body" />
                <Container className="contact-layout">
                    <Row xs="1" md="2">
                        <Col className="ok">
                            <h2>Ari Rahim</h2>
                            <div className="w-50 m-auto">
                                <img className='imgg'
                                     src="https://gentle-refuge-73650.herokuapp.com/photo_contact.jpg"
                                     alt="avatar"
                                />
                            </div>
                            <p style={{margin: 'auto', padding: '1em'}}>If you like my work and have
                                project Idea to work on, just send me direct message or get in touch through social
                                sites listed below.</p>
                            <div className="container social text-center mt-n3 mb-3">
                                <a href="https://www.facebook.com/ari.rahim.56"
                                   rel="noopener noreferrer" target="_blank">
                                    <FaFacebookSquare/>
                                </a>&nbsp;&nbsp;
                                <a href="https://vk.com/id339599349"
                                   rel="noopener noreferrer" target="_blank">
                                    <FaVk/>
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <h2>Contact me</h2>
                            <ListGroup className="contact-i">
                                <ListGroupItem className="border-0 mr-auto">
                                    <Row>
                                        <Col xs="3" className="social"><FaPhoneSquareAlt/></Col>
                                        <Col className="m-auto"><p>+79234292313</p></Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 mr-auto">
                                    <Row>
                                        <Col xs="3" className="social"><FaEnvelopeSquare/></Col>
                                        <Col className="m-auto"><p>aritomsk@yahoo.com</p></Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 mr-auto">
                                    <Row>
                                        <Col xs="3" className="social"><FaSkype/></Col>
                                        <Col className="m-auto"><p>ari.rahim1</p></Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;

