import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardLink, CardText, CardTitle, Col, Row} from "reactstrap";

class Jquery extends Component {
    render() {
        return (
            <Row>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
                        <CardTitle><b><i>Pomodoro Clock</i></b></CardTitle>
                        <CardText>A clock timer with a task list integration</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://codepen.io/Aristo85/pen/oErooN"
                                      target="_blank"
                            >CodePen</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
                        <CardTitle><b><i>Calculator</i></b></CardTitle>
                        <CardText>Virtual calculator with its usual features.</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://codepen.io/Aristo85/pen/mXawvY"
                                      target="_blank"
                            >CodePen</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
                        <CardTitle><b><i>Wiki Viewer</i></b></CardTitle>
                        <CardText>Using wiki api, to build a search engine viewer based on Wikipedia.</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://codepen.io/Aristo85/pen/aqoEqj"
                                      target="_blank"
                            >CodePen</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
                        <CardTitle><b><i>Instant weather APP</i></b></CardTitle>
                        <CardText>Google Maps API to geocode user search terms, then data was
                            retrieved from the Forecast IO API.</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://codepen.io/Aristo85/pen/dJBdMO"
                                      target="_blank"
                            >CodePen</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" className="mb-1">
                    <Card body>
                        <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
                        <CardTitle><b><i>Quoter</i></b></CardTitle>
                        <CardText>Written using quote API. Twitter social integration is then included to allow
                            users to tweet it.</CardText>
                        <CardBody>
                            <CardLink className="link btn" style={{color: "green"}}
                                      href="https://codepen.io/Aristo85/pen/zpLVaE?editors=1010"
                                      target="_blank"
                            >CodePen</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Jquery;