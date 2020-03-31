import React from "react";
import { UserIndex } from "../components/user/UserIndex";
import { User } from "../models/user";
import { Gender } from "../models/gender";
import { UserForm } from "../components/user/UserForm";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models/state";
import { bindActionCreators } from "redux";
import { createUser, deleteUser, updateUser } from "../features/userFeature";

export const UsersContainer: React.FC = () => {
  const defaultUsers: User[] = [
    {
      id: 0,
      forename: "Juck",
      surname: "Norris",
      birthday: new Date().getTime(),
      email: "juck@norris.com",
      gender: Gender.MALE,
      active: false
    },
    {
      id: 1,
      forename: "Robin",
      surname: "Bühler",
      birthday: new Date().getTime(),
      email: "r@obin.ch",
      gender: Gender.MALE,
      active: true
    },
    {
      id: 2,
      forename: "Scarlett",
      surname: "Johanson",
      birthday: new Date().getTime(),
      email: "s@johannson.ch",
      gender: Gender.MALE,
      active: false
    }
  ];

  const users = useSelector<State, User[]>(state => state.users);
  const dispatch = useDispatch();
  const actions = bindActionCreators({createUser, deleteUser, updateUser}, dispatch);

  return (
    <>
      <UserForm saveUser={actions.createUser} />
      <UserIndex
        users={users}
        updateAction={actions.updateUser}
        deleteAction={actions.deleteUser}
      />
    </>
  );
};
