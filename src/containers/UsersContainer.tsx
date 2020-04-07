import React, { useEffect } from "react";
import { UserIndex } from "../components/user/UserIndex";
import { User } from "../models/user";
import { UserForm } from "../components/user/UserForm";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models/state";
import { bindActionCreators } from "redux";
import { indexUsersAction, createUserAction, deleteUserAction, updateUserAction } from "../features/userFeature";

export const UsersContainer: React.FC = () => {
  const users = useSelector<State, User[]>(state => state.users);
  const dispatch = useDispatch();
  const actions = bindActionCreators({indexUsersAction, createUserAction, deleteUserAction, updateUserAction}, dispatch);

  useEffect(() => {
    // request
    actions.indexUsersAction();
  }, []);

  return (
    <>
      <UserForm saveUser={actions.createUserAction} />
      <UserIndex
        users={users}
        updateAction={actions.updateUserAction}
        deleteAction={actions.deleteUserAction}
      />
    </>
  );
};
