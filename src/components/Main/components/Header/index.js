import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from 'react-bootstrap';
import './header.css'

const Header = ({ showButton, title, txt, link }) => {

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <h2> {title} </h2>
                </Col>
                <Col className=" d-flex justify-content-end">
                    {showButton &&
                        <Button className="d-none d-sm-inline-block btn-add">
                            <Link className="btn-lnk-header" to={link}>+ {txt}</Link>
                        </Button>
                    }
                </Col>
            </Row>
        </Container>
    );
};

Header.defaultProps = {
    showButton: false,
}
export { Header };