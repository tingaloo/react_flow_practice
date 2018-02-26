export const addGoal = goal => {
  console.log("action add goal");
  return {
    type: 'ADD_GOAL',
    id: goal.id,
    l2: goal.l2,
    l3: goal.l3
  }
}

export const login = user => {
  console.log("login");
  return {
    type: 'LOGIN',
    username: user.username,
    password: user.password
  }
}
