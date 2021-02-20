import React, { useState } from "react";
import { Layout, Main } from "../../../components";
import Logo from "../../../assets/img/logo-fucsia-Ada.png";
import { Row, Card, Form, InputGroup, Button } from "react-bootstrap";
import { useAuth } from '../../../hooks';

const Register = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const { register } = useAuth()


    const handleOnSubmit = (e) => {
        e.preventDefault();
        register(
            {
                fullName: fullName,
                email: email,
                password: password,
            })
            .then(
                setFullName(''),
                setEmail(''),
                setPassword('')
            )
    };

    return (
        <Layout hideHeader={true} hideAside={true}>
            <Main className={"backGround"}>
                <div className="singin">
                    <Row className="justify-content-center">
                        <div className="col-lg-5">
                            <Card className="shadow">
                                <div className="card-header pt-4 pb-4 text-center color">
                                    <img src={Logo} alt="ADA admin logo" height="50" />
                                </div>
                                <Card.Body className="p-4">
                                    <Card.Title className="text-center">
                                        <h4 className="text-dark-50 mt-0 font-weight-bold">
                                            Sign In
                                         </h4>
                                        <Card.Text className="text-muted mb-4">
                                            Enter your email address and password to access.
                                        </Card.Text>
                                    </Card.Title>
                                    <Form onSubmit={handleOnSubmit}>
                                        <Form.Group>
                                            <Form.Label>Fullname</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="fullName"
                                                required=""
                                                placeholder="Enter your name and lastname"
                                                value={fullName} onChange={(e) => setFullName(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                required=""
                                                placeholder="Enter your email"
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup className=" input-group-merge">
                                                <Form.Control
                                                    type="password"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <InputGroup.Append data-password="false">
                                                    <InputGroup.Text>
                                                        <i className="bi bi-eye-fill"></i>
                                                    </InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <InputGroup className=" input-group-merge">
                                                <Form.Control
                                                    type="password"
                                                    id="confirmpassword"
                                                    placeholder="Enter your password"
                                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <InputGroup.Append data-password="false">
                                                    <InputGroup.Text>
                                                        <i className="bi bi-eye-fill"></i>
                                                    </InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Check required label="Remember Me" />
                                        </Form.Group>
                                        <Form.Group className="text-center">
                                            <Button className="btn-color" type="submit">
                                                Log In
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </Main>
        </Layout>
    );
};

export { Register };