import React from 'react';
import { User } from '../../models/user';
import { UserForm } from './UserForm';

interface Props {
    users: User[]; // gleich wie users: Array<User>;
    deleteAction: (id: number) => void;
    updateAction: (user: User) => void;
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
                    <th>Active?</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.forename}</td>
                        <td>{user.surname}</td>
                        <td>{new Date(user.birthday).toLocaleDateString()}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.active ? 'Yes' : 'No'}</td>
                        <td>
                            <UserForm saveUser={props.updateAction} user={user} />
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