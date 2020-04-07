import { createAction, ActionType } from 'typesafe-actions';
import { User } from '../models/user';
import { Dispatch } from 'redux';
import { indexUsersClient, createUserClient, updateUserClient, deleteUserClient } from '../client/userClient';

export const indexUsers = createAction('users/INDEX')<User[]>();
export const indexUsersAction = () => {
    return (dispatch: Dispatch) => {
        indexUsersClient().then(response => dispatch(indexUsers(response.data)));
    }
};

export const createUser = createAction('users/CREATE')<User>();
export const createUserAction = (user: User) => {
    return (dispatch: Dispatch) => {
        createUserClient(user).then(response => dispatch(createUser(response.data)));
    }
};

export const updateUser = createAction('users/UPDATE')<User>();
export const updateUserAction = (user: User) => {
    return (dispatch: Dispatch) => {
        updateUserClient(user).then(response => dispatch(updateUser(response.data)));
    }
};

export const deleteUser = createAction('users/DELETE')<User>();
export const deleteUserAction = (user: User) => {
    return (dispatch: Dispatch) => {
        deleteUserClient(user).then(() => dispatch(deleteUser(user)));
    }
};

type UserActions = ActionType<typeof indexUsers | typeof createUser | typeof updateUser | typeof deleteUser>;

export const usersReducer = (state: User[] = [], action: UserActions) => {
    switch (action.type) {
        case 'users/INDEX':
            return action.payload;
        case 'users/CREATE':
            return [...state, { ...action.payload }];
        case 'users/UPDATE':
            return state.map(u => (u.id === action.payload.id ? action.payload : u));
        case 'users/DELETE':
            return state.filter(u => u.id !== action.payload.id);
        default:
            return state;
    }
}