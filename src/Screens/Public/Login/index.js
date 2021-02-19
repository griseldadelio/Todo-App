import React from 'react';
import { Layout, Main } from '../../../components';
import Row from 'react-bootstrap/Row';
import Logo from '../../../assets/img/logo-fucsia-Ada.png';
import Card from 'react-bootstrap/Card';
import './login.css';
import { CardForm } from './CardForm';

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
                                <CardForm title={'Sign In'} text={'Enter your email address and password to access.'} />
                            </Card>
                        </div>
                    </Row>
                </div>
            </Main>
        </Layout>
    )
}
