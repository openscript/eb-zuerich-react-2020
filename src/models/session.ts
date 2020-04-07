import { User } from "./user";

export interface Session {
    token?: string;
    currentUser?: User;
}