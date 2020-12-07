import React, {Component} from 'react';
import {Progress} from 'reactstrap';
import {Row, Container, Col } from "reactstrap";

class Resume extends Component {
    render() {
        return (
            <Container className="resume">
                <Row xs="1">
                    <Col md='4' className="resume-left-col">
                        <div>
                            <img
                                src="https://gentle-refuge-73650.herokuapp.com/resume.jpg"
                                alt="avatar"
                                className="resume-img"
                            />
                        </div>
                        <h2>Рахим Ари</h2>
                        <div className="text-left">
                            <h4 style={{color: 'grey'}}>Программист</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <p>Фанат Full-Stack. Моя предыдущая карьера в качестве преподавателя университета по электронике и информатике в университете Halabja показала мой большой интерес к механическим процессам, решению проблем и созданию качественных продуктов посредством совместной командной работы. Я специализируюсь на HTML, CSS, JavaScript и React на интерфейсе, а также на Node/Express и Mongo на сервере, чтобы создавать красивые и безопасные приложения..</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <h5 className="d-inline">Address</h5><p>21/2 Усова, Томск, 634034</p>
                            <h5>Phone</h5>
                            <p>+79234292313</p>
                            <h5>Email</h5>
                            <p>aritomsk@yahoo.com</p>
                        </div>

                    </Col>
                    <Col md='8' className="resume-right-col">
                        <Row xs="1">
                            <Col xs="4"><h3>образование</h3></Col>
                            <Col>
                                <Row xs="1" className="education">
                                    <Col xs="6" sm="4" ><p>2006 - 2012</p></Col>
                                    <Col sm="8" style={{textAlign: 'left'}}>
                                        <h4 className="mt-0">Национальный исследовательский Томский политехнический университет</h4>
                                        <p>степень бакалавра и магистра в области электроники и микроэлектроники</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <Row xs="1">
                            <Col xs="4"><h3>опыт работы</h3></Col>
                            <Col>
                                <Row xs="1" className="education">
                                    <Col xs="8" sm="4"><p>2013 - 2020</p></Col>
                                    <Col sm="8" style={{textAlign: 'left'}}>
                                        <h4 className="mt-0">Университет Халабджа</h4>
                                        <p>Преподаватель университета по физике и информатике</p>
                                        <ul>
                                            <li>Теория электричества и магнетизма для физического факультета</li>
                                            <li>Информационные технологии для кафедры общественных наук</li>
                                            <li>Заведующий лабораторией электроники (2014 - 2015)</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <Row xs="1" className="skills">
                            <Col xs="4"><h3>Навыки</h3></Col>
                            <Col>
                                <Row xs="2">
                                    <Col sm="4"><p>JavaScript</p></Col>
                                    <Col sm="8"><Progress value={90} /></Col>
                                </Row>
                                <Row xs="2">
                                    <Col sm="4"><p>HTML/CSS</p></Col>
                                    <Col sm="8"><Progress value={80} /></Col>
                                </Row>
                                <Row xs="2">
                                    <Col sm="4"><p>Node.js/Express</p></Col>
                                    <Col sm="8"><Progress value={70} /></Col>
                                </Row>
                                <Row xs="2">
                                    <Col sm="4"><p>React/Redux</p></Col>
                                    <Col sm="8"><Progress value={85} /></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;