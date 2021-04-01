import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { TableUsers } from "./components";
import { Table, Container } from 'react-bootstrap';
import { user } from '../../../../utils';
import { api } from '../../../../utils'


const User = () => {
    const [t] = useTranslation("global");
    const [users, setUsers] = useState([]);


    const getUser = () => {
        user.get()
            .then(response => {
                setUsers(response);
            })
    }

    useEffect(() => {
        getUser()
    }, []);

    const deleteUser = async (id) => {
        await api({
            method: 'DELETE',
            url: '/users/' + id + '.json'
        })
    }

    return (
        <Layout>
            <Main showButton={true} title={t("main.titleUser")} txt={t("main.btnuser")} link={('/users/add')} className={"bg-light main"} >
                <Container>
                    <Table className='striped bordered hover p-5'>
                        <thead className="text-center">
                            <tr>
                                <th>{t("form.name")}</th>
                                <th>{t("form.lastName")}</th>
                                <th>{t("form.email")}</th>
                                <th>{t("form.edit")}</th>
                                <th>{t("form.delete")}</th>
                            </tr>
                        </thead>
                        {users.map(({ name, lastName, email, id }) => {
                            return (
                                <TableUsers key={id} name={name} lastName={lastName} email={email} handleClickDelete={deleteUser} />
                            );
                        })}
                    </Table>
                </Container>
            </Main>
        </Layout>
    );
};

export { User };