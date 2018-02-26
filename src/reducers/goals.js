const goals = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GOAL':
    console.log(state);
      return [
        ...state,
        {
          id: action.id,
          l2: action.l2,
          l3: action.l3
        }
      ]
    default:
      return state
  }
}
 
export default goals;
