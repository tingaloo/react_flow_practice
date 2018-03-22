// @flow

import type { Goal, Id } from '../types/goals';
import type { User } from '../types/user';
import axios from 'axios';

export const addGoal = (goal: Goal) => {
  return {
    type: 'ADD_GOAL',
    id: goal.id,
    l2: goal.l2,
    l3: goal.l3
  }
}

export const removeGoal = (id: Id) => {
    return {
      type: 'REMOVE_GOAL',
      id
    }
}

export function loginError(bool) {
    return {
        type: 'LOGIN_ERROR',
        hasError: bool
    };
}

export function loginLoading(bool) {
    return {
        type: 'LOGIN_LOADING',
        isLoading: bool
    };
}

export function loginSuccess(user : User) {
    return {
        type: 'LOGIN_SUCCESS',
        username: user.username,
        password: user.password
    };
}


export function login(user : User) {
        return dispatch => {
          const url = 'http://jsonplaceholder.typicode.com/posts';
            dispatch(loginLoading(true));

            return axios.get(url)
                .then((response) => {
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(loginLoading(false));
                    return response;
                })
                .then((response) => dispatch(loginSuccess(user)))
                .catch(() => dispatch(loginError(true)));
        };
    }
