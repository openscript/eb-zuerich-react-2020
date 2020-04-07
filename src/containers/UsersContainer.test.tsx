import createMockStore, { MockStoreEnhanced } from "redux-mock-store"
import { State } from '../models/state';
import thunk from 'redux-thunk';
import { Gender } from "../models/gender";
import renderer from 'react-test-renderer';
import React from 'react';
import { UsersContainer } from './UsersContainer';
import { Provider } from "react-redux";
import { UserIndex } from "../components/user/UserIndex";

describe('UsersContainer', () => {
    let store: MockStoreEnhanced;

    beforeEach(() => {
        const mockStore = createMockStore<State>([thunk]);
        store = mockStore({
            users: [
                {id: 0, forename: 'John', surname: 'Wick', email: 'john.wick@example.com', birthday: 0, active: true, gender: Gender.MALE},
                {id: 1, forename: 'Joanne', surname: 'Wick', email: 'john.wick@example.com', birthday: 0, active: true, gender: Gender.FEMALE}
            ],
        })
    })

    it('renders without crashing', () => {
        renderer.create(<Provider store={store}><UsersContainer /></Provider>)
    })

    it('contains a UserIndex with all redux store data', () => {
        const stage = renderer.create(<Provider store={store}><UsersContainer /></Provider>);
        const tableRows = stage.root.findByType(UserIndex).findByType('tbody').findAllByType('tr');
        expect(tableRows.length).toBe(3);
    })
})