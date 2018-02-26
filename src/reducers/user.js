const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
          username: action.username,
          password: action.password
        }
    default:
      return state
  }
}
 
export default user;
