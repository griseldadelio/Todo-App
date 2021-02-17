import React from 'react';
import { Layout, Main } from '../../components';
import Logo from '../../assets/img/logo-fucsia-Ada.png';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './login.css';

export const Login = () => {
    return (
        <Layout hideHeader={true} hideAside={true}>
            <Main className={"backGround"}>
                <div className="login">
                    <Row className="justify-content-center">
                        <div className="col-lg-5">
                            <Card>
                                <div className="card-header pt-4 pb-4 text-center color">
                                    <img src={Logo} alt="ADA admin logo" height="50" />
                                </div>
                                <Card.Body className="p-4">
                                    <Card.Title className="text-center">
                                        <h4 className="text-dark-50 mt-0 font-weight-bold">Sign In</h4>
                                        <Card.Text className="text-muted mb-4">
                                            Enter your email address and password to access.
                                        </Card.Text>
                                    </Card.Title>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" id="emai" required="" placeholder="Enter your email" />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup className=" input-group-merge">
                                                <Form.Control type="password" id="password" placeholder="Enter your password" />
                                                <InputGroup.Append data-password="false">
                                                    <InputGroup.Text>
                                                        <i className="bi bi-eye-fill"></i>
                                                    </InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Check
                                                required
                                                label="Remember Me"
                                            />
                                        </Form.Group>
                                        <Form.Group className="text-center">
                                            <Button className="btn-color" type="submit">Log In</Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </Main>
        </Layout>
    )
}
