import React, {Component} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Title from "./title";
import { FaPhoneSquareAlt, FaEnvelopeSquare, FaSkype, FaFacebookSquare, FaVk } from 'react-icons/fa';

class Contact extends Component {
    render() {
        return (
            <div className="contact-feature">
                <Title title="Связаться со мной" />
                <div className="section-title">
                    <div className="mt-n4 mb-n2" />
                </div>
                <Row className="container">
                    <ListGroup className="w-100">
                        <ListGroupItem color="info">
                            <Row >
                                <Col className="social"><FaPhoneSquareAlt/></Col>
                                <Col className="m-auto"><p>+79234292313</p></Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem color="info">
                            <Row>
                                <Col className="social"><FaEnvelopeSquare/></Col>
                                <Col className="m-auto"><p>aritomsk@yahoo.com</p></Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem color="info">
                            <Row>
                                <Col className="social"><FaSkype/></Col>
                                <Col className="m-auto"><p>ari.rahim1</p></Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                    <p className="container text-center">Если вам нравится мои работы и у вас есть идея проекта,
                        звоните! илисвяжитесь со мной через социальные сайты, перечисленные ниже.</p>
                    <div className="social">
                        <a href="https://www.facebook.com/ari.rahim.56"
                           rel="noopener noreferrer" target="_blank">
                            <FaFacebookSquare/>
                        </a>&nbsp;&nbsp;
                        <a href="https://vk.com/id339599349"
                           rel="noopener noreferrer" target="_blank">
                            <FaVk/>
                        </a>
                    </div>

                </Row>
            </div>
        );
    }
}

export default Contact;