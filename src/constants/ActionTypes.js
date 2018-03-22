/*
 * action types
 */

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const LOGIN = 'LOGIN';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
/*
 * action creators
 */

export const addGoal = goal => ({
  type: 'ADD_GOAL',
  id: goal.id,
  l2: goal.l2,
  l3: goal.l3,
});

export const removeGoal = id => ({
  type: 'REMOVE_GOAL',
  id,
});

export const loginError = bool => {
    return {
        type: 'LOGIN_ERROR',
        hasError: bool
    };
}


// export const login = user => ({
//   type: 'LOGIN',
//   username: user.username,
//   password: user.password,
// });
export const loginLoading = (bool) => {
  return {
    type: 'LOGIN_LOADING',
    isLoading: bool,
  }
}

export const loginSuccess = user =>({
  type: 'LOGIN_SUCCESS',
  username: user.username,
  password: user.password,
});
