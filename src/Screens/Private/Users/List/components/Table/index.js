import React from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const TableUsers = ({ name, lastName, email, id, handleClickDelete }) => {

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td className="text-center">
                    <Link to={`/users/edit/${id}`} className="mx-2">
                        <PencilFill />
                    </Link>
                </td>
                <td className="text-center">
                    <button onClick={() => handleClickDelete(id)} >
                        <TrashFill />
                    </button>
                </td>
            </tr>
        </tbody>
    )
}
export { TableUsers }
