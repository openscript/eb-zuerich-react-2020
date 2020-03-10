import React from 'react';
import { User } from '../../models/user';
import { Gender } from '../../models/gender';

export const UserIndex: React.FC = () => {
    const users: User[] = [
        { forename: 'Juck', surname: 'Norris', birthday: new Date().getTime(), email: 'juck@norris.com', gender: Gender.MALE},
        { forename: 'Robin', surname: 'Bühler', birthday: new Date().getTime(), email: 'r@obin.ch', gender: Gender.MALE},
        { forename: 'Scarlett', surname: 'Johanson', birthday: new Date().getTime(), email: 's@johannson.ch', gender: Gender.MALE},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Forename</th>
                    <th>Surname</th>
                    <th>Birthday</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr>
                        <td>{user.forename}</td>
                        <td>{user.surname}</td>
                        <td>{user.birthday}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}