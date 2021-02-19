import React, { useState } from "react";
import { api } from "../../../../utils";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const AddUsersForm = () => {
    const [name, setName] = useState();
    const [lastName, setlastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/users.json", {
            name: name,
            lastName: lastName,
            email: email,
            password: password,
        })
            .then(() => {
                setName('')
                setlastName('')
                setEmail('')
                setPassword('')
            })
    };
    const [t] = useTranslation("global");

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
                        <input className="form-control form-control-light mb-3" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="mt-3">
                            <Button type="button" className="btn btn-light border border-secondary mx-1">{t("form.cancel")}</Button>
                            <Button type="submit" className="btn btn-primary">{t("form.add")}</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Main>
        </Layout>
    )
}

export { AddUsersForm }