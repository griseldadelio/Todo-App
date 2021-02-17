import React from "react";
import { Search } from "react-bootstrap-icons";
import { Bell, ArrowLeft } from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import avatar from "../../../../../../assets/img/avatar.gri.jpeg";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { goBack } = useHistory();
    const [t, i18n] = useTranslation("global");

    return (
        <Nav className="navbar-expand-lg navbar-light">
            <Container fluid>
                <Navbar.Collapse id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 me-3">
                        <li>
                            <button className="btn" onClick={goBack}>
                                <ArrowLeft />
                            </button>
                        </li>
                    </ul>
                    <Form className="d-flex">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">
                                <Search />
                            </InputGroup.Text>
                            <FormControl type="text" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" />
                            <button className="btn btn-search shadow" type="submit">
                                {t("navbar.Search")}
                            </button>
                        </InputGroup >
                        <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                    </Form>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
                        <DropdownButton variant="bg-none" title="Language">
                            <Dropdown.Item onClick={() => i18n.changeLanguage("es")} href="#/action-2">🇪🇸 &nbsp; SPANISH</Dropdown.Item>
                            <Dropdown.Item onClick={() => i18n.changeLanguage('en')} href="#/action-1">🇬🇧 &nbsp; ENGLISH</Dropdown.Item>
                        </DropdownButton>
                        <Nav.Item>
                            <Nav.Link aria-current="page" href="#">
                                <Bell />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">
                                <Grid3x3GapFill />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">
                                <Gear />
                            </Nav.Link>
                        </Nav.Item>
                        <li className="nav-item dropdown">
                            <Nav.Link className="dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={avatar} alt="user-avatar" width="32" className="rounded-circle ms-1 me-2" />
                                Griselda De Lio
                            </Nav.Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavDropdown.Item href="https://github.com/griseldadelio" target="_blank">
                                    Github
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/griseldadelio" target="_blank">
                                    Linkedin
                                </NavDropdown.Item>
                                <hr className="dropdown-divider" />
                                <NavDropdown.Item className="dropdown-item" href="#Footer">
                                    {t("navbar.Contact")}
                                </NavDropdown.Item>
                            </ul>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container >
        </Nav >
    );
};

export { NavBar };