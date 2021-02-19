import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardForm = ({ title, text }) => {
    return (
        <Card.Body className="p-4">
            <Card.Title className="text-center">
                <h4 className="text-dark-50 mt-0 font-weight-bold">{title} </h4>
                <Card.Text className="text-muted mb-4">
                    {text}
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
    )
}
