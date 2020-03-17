import React, { useState } from 'react';
import './UserForm.css';
import { Gender } from '../../models/gender';
import { User } from '../../models/user';
import { Dialog } from '../Dialog';

interface Props {
    saveUser: (user: User) => void;
    user?: User;
}

export const UserForm: React.FC<Props> = (props) => {
    const initialUser = props.user 
        ? props.user
        : {
            id: 0,
            forename: '',
            surname: '',
            birthday: 0,
            email: '',
            gender: Gender.MALE
        };
    const [open, isOpen] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User>(initialUser);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toggleDialog();
        props.saveUser(currentUser);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value: string|number = event.target.value;
        if(event.target.type === 'date') {
            value = new Date(value).getTime();
        }
        const newCurrentUser = {...currentUser, [event.target.name]: value};
        setCurrentUser(newCurrentUser);
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
            <button onClick={toggleDialog}>
                {props.user ? 'Edit' : 'New'}
            </button>
            <Dialog open={open}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='forename'>Forename</label>
                    <input onChange={handleChange} required name='forename' type='text' id='forename' defaultValue={currentUser.forename}/>
                    <label htmlFor='surname'>Surname</label>
                    <input onChange={handleChange} required name='surname' type='text' id='surname' />
                    <label htmlFor='birthday'>Birthday</label>
                    <input onChange={handleChange} required name='birthday' type='date' id='birthday' />
                    <label htmlFor='email'>Email</label>
                    <input onChange={handleChange} name='email' type='email' id='email' />
                    <label htmlFor='gender'>Gender</label>
                    <select onChange={handleChange} name='gender' id='gender'>
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                        <option value={Gender.OTHER}>Other</option>
                    </select>
                    <input type='submit' value='Create new user' />
                </form>
                <button onClick={toggleDialog}>Cancel</button>
            </Dialog>
        </>
    );
}