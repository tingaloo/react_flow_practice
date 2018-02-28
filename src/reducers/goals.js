const goals = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return [
        ...state,
        {
          id: action.id,
          l2: action.l2,
          l3: action.l3
        }
      ]
    case 'REMOVE_GOAL':
      return state.filter(({id})  => id != action.id)
    default:
      return state
  }
}
 
export default goals;
