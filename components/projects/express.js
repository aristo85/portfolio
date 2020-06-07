import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardLink, CardText, CardTitle, Col, Row} from "reactstrap";

class ExpressNode extends Component {
    render() {
        return (
            <Row>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/express.png" alt="Card image cap" />
                        <CardTitle><b><i>Exercise tracker</i></b></CardTitle>
                        <CardText>A FreeCodeCamp project of API and Microservices certificate, with Express and MongoDB.</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://github.com/aristo85/exerciseTracker"
                                      target="_blank"
                            >GitHub</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/express.png" alt="Card image cap" />
                        <CardTitle><b><i>Short URI</i></b></CardTitle>
                        <CardText>Made with Express and MongoDB, it checks validation of
                            a URL and save it in a shorter format in DB.</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://github.com/aristo85/BookServiceClient"
                                      target="_blank"
                            >GitHub</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/express.png" alt="Card image cap" />
                        <CardTitle><b><i>Time Microservice</i></b></CardTitle>
                        <CardText>Simple RESTful API, with only Express.</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://tomsktimestampari.herokuapp.com/"
                                      target="_blank"
                            >Live Demo</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ExpressNode;