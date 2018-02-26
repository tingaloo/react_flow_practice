// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { GoalsState, GoalsAction} from './goals';
import type { UserState, UserAction } from './user';

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | GoalsAction;

export type State = GoalsState;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
