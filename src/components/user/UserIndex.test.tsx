import { User } from '../../models/user';
import { Gender } from '../../models/gender';
import { UserIndex } from './UserIndex';
import React from 'react';
import renderer from 'react-test-renderer';

interface Props {
    users: User[]; 
    deleteAction: (user: User) => void;
    updateAction: (user: User) => void;
}

describe('UserIndex', () => {
    const renderUserIndex = (props?: Partial<Props>) => {
        const defaultProps: Props = {
            users: [
                {id: 0, forename: 'John', surname: 'Wick', email: 'john.wick@example.com', birthday: 0, active: true, gender: Gender.MALE},
                {id: 1, forename: 'Joanne', surname: 'Wick', email: 'john.wick@example.com', birthday: 0, active: true, gender: Gender.FEMALE},
                {id: 2, forename: 'Sarah', surname: 'Wick', email: 'john.wick@example.com', birthday: 0, active: true, gender: Gender.FEMALE},
            ],
            deleteAction: () => {},
            updateAction: () => {}
        }

        return <UserIndex {...defaultProps} {...props} />;
    }

    it('should render a row for each user', () => {
        const stage = renderer.create(renderUserIndex());
        const tableRows = stage.root.findByType('tbody').findAllByType('tr');
        expect(tableRows.length).toBe(3);
    });

    it('should call the delete callback', () => {
        const deleteActionMock = jest.fn();
        const stage = renderer.create(renderUserIndex({deleteAction: deleteActionMock}));
        stage.root
            .findByType('tbody')
            .findAllByType('tr')[0]
            .findByProps({children: 'Delete'})
            .props.onClick();
        expect(deleteActionMock).toBeCalledTimes(1);
    })
})