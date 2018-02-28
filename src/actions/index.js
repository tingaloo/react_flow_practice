// @flow

import type { Goal, Id } from '../types/goals';
import type { User } from '../types/user';

export const addGoal = (goal: Goal) => {
  console.log("action add goal");
  return {
    type: 'ADD_GOAL',
    id: goal.id,
    l2: goal.l2,
    l3: goal.l3
  }
}

export const removeGoal = (id: Id) => {
    console.log("remove goal");
    return {
      type: 'REMOVE_GOAL',
      id
    }
}

export const login = (user : User) => {
  console.log("login");
  return {
    type: 'LOGIN',
    username: user.username,
    password: user.password
  }
}
