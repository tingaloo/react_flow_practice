export const loginError = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return action.hasError;
    default:
      return state;
  }
};

export const loginLoading = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        username: action.username,
        password: action.password,
      };
    default:
      return state;
  }
};
