import React, { useState } from "react";
import { UserIndex } from "../components/user/UserIndex";
import { User } from "../models/user";
import { Gender } from "../models/gender";
import { UserForm } from "../components/user/UserForm";

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

  const [users, setUsers] = useState<User[]>(defaultUsers);

  const createUser = (user: User) => {
    const newUser = { ...user, id: new Date().getTime() };
    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  const updateUser = (user: User) => {
    const newUsers = users.map(u => (u.id === user.id ? user : u));
    setUsers(newUsers);
  };

  const deleteUser = (userId: number) => {
    const newUsers = users.filter(u => u.id !== userId);
    setUsers(newUsers);
  };

  return (
    <>
      <UserForm saveUser={createUser} />
      <UserIndex
        users={users}
        updateAction={updateUser}
        deleteAction={deleteUser}
      />
    </>
  );
};
