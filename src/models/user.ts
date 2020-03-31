import { Gender } from './gender';

export interface User {
    id: number;
    forename: string,
    surname: string,
    email: string,
    birthday: number,
    gender: Gender,
    active: boolean
}

export interface UserDraft extends Omit<User, 'id'> {
}

export const defaultUsers: User[] = [
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