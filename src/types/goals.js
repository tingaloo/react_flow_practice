// @flow

export type Id = string;
export type L2 = string;
export type L3 = string;

export type Goal = {
  +id: Id,
  +l2: L2,
  +l3: L3
};

export type Goals = Array<Goal>;

export type GoalsState = {
  +goals: Goals
}

export type GoalsAction =
  | { type: 'ADD_GOAL', +id: Id, +l2: L2, +l3: L3 }
