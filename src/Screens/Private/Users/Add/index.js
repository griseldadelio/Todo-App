import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import { user } from "../../../../utils";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { Form, Button } from 'react-bootstrap';

const Add = ({ match }) => {
    const [name, setName] = useState();
    const [lastName, setlastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const id = match.params.id;
    const [t] = useTranslation("global");

    const createUser = async () => {
        await user.post({ name, lastName, email, password });
        alert('Usuario cargado exitosamente');
        history.push('/users/');
    }

    const updateUser = () => {
        user.patch(id, { name, lastName, email, password })
        history.push('/users/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateUser();
        } else {
            createUser();
        }
    }

    useEffect(() => {
        if (id) {
            user.getId(id)
                .then(response => {
                    setName(response.name);
                    setlastName(response.lastName);
                    setEmail(response.email);
                    setPassword(response.password)
                })
        }
    }, [])

    return (
        <Layout>
            <Main title={t("form.titleFormUser")} className={"bg-light main"}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="col-6">
                        <Form.Label className="mb-2">{t("form.name")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.lastName")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.email")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.password")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type={showPassword ? "text" : "password"} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="mt-3">
                            <Link to={'/users/'} type="button" className="btn btn-light border border-secondary mx-1">{t("form.cancel")}</Link>
                            <Button type="submit" className="btn btn-primary mx-1">{t("form.add")}</Button>
                            <Button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-info">Ver Password</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Main>
        </Layout>
    )
}

export { Add }