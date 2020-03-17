import React from 'react';
import { User } from '../../models/user';

interface Props {
    users: User[]; // gleich wie users: Array<User>;
    deleteAction: (id: number) => void;
}

export const UserIndex: React.FC<Props> = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Forename</th>
                    <th>Surname</th>
                    <th>Birthday</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                    <tr>
                        <td>{user.forename}</td>
                        <td>{user.surname}</td>
                        <td>{user.birthday}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>
                            <button onClick={() => props.deleteAction(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}