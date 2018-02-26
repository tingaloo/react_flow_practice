// @flow

export type Username = string;
export type Password = string;

export type User = {
  +username: Username,
  +password: Password
};

export type UserState = {
  +user: User
}

export type UserAction =
    | { type: 'LOGIN', +username: Username, +password: Password}
