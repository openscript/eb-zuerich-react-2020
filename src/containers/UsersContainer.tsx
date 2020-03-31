import React from "react";
import { UserIndex } from "../components/user/UserIndex";
import { User } from "../models/user";
import { UserForm } from "../components/user/UserForm";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models/state";
import { bindActionCreators } from "redux";
import { createUser, deleteUser, updateUser } from "../features/userFeature";

export const UsersContainer: React.FC = () => {
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
