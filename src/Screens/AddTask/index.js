import React, { useState } from "react";
import { api } from "../../utils";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../components";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const AddTask = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [assigned, setAssigned] = useState();

    // const [tarea, setTarea] = useState({});
    // Este handle on change hacia una funcion para todos los inputs
    // const handleOnChange = (e) => {
    //   const { name, value } = e.target;
    //   // setTarea({ ...tarea, [name]: value });
    // };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        api.post("/tareas.json", {
            title: title,
            date: date,
            description: description,
            assigned: assigned,
        });
    };
    const [t] = useTranslation("global");

    return (
        <Layout>
            <Main title={t("form.titleFormTask")} className={"bg-light main"}>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="col-6">
                        <Form.Label className="mb-2">{t("form.title")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.date")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.assigned")}</Form.Label>
                        <input className="form-control form-control-light mb-3" type="text" value={assigned} onChange={(e) => setAssigned(e.target.value)} />
                        <Form.Label className="mb-2">{t("form.desc")}</Form.Label>
                        <textarea className="form-control form-control-light mb-3" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className="mt-3">
                            <Button type="button" className="btn btn-light border border-secondary mx-1">{t("form.cancel")}</Button>
                            <Button type="submit" className="btn btn-primary">{t("form.create")}</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Main>
        </Layout>
    );
};

export { AddTask };