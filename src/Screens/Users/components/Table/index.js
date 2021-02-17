import React from 'react';
import { api } from "../../../../utils";

const TableUsers = ({ name, lastName, email, password, id }) => {
    api
        .patch(`/users/${id}.json`, {
        })
        .then((response) => {
            const data = response.data;
            console.log(data)
        });
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{password}</td>
            </tr>
        </tbody>
    )
}
export { TableUsers }