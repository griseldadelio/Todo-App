import React, { useState, useEffect } from "react";
import { api } from "../../utils";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../components";
import { objectToArray } from "../../helpers";
import { TableUsers } from "./components";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'


const Users = () => {
    const [t] = useTranslation("global");
    const [users, setUsers] = useState([]);

    const getApi = () => {
        api
            .get("/users.json")
            .then((response) => {
                const data = objectToArray(response.data);
                setUsers(data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getApi();
    }, []);
    return (
        <Layout>
            <Main showButton={true} title={t("main.titleUser")} txt={t("main.btnuser")} link={('/addUsers')} className={"bg-light main"} >
                <Container>
                    <Table striped bordered hover p-5>
                        <thead className="text-center">
                            <tr>
                                <th>{t("form.name")}</th>
                                <th>{t("form.lastName")}</th>
                                <th>{t("form.email")}</th>
                                <th>{t("form.password")}</th>
                            </tr>
                        </thead>
                        {users.map(({ name, lastName, email, password }) => {
                            return (
                                <TableUsers name={name} lastName={lastName} email={email} password={password} />
                            );
                        })}
                    </Table>
                </Container>
            </Main>
        </Layout>
    );
};

export { Users };