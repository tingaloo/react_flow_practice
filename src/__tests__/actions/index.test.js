import * as actions from '../../actions/';
import * as types from '../../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a goal', () => {
    const goal = {
      id: 'goal_1',
      l2: 'level2',
      l3: 'level3',
    };

    const expectedAction = {
      type: types.ADD_GOAL,
      id: goal.id,
      l2: goal.l2,
      l3: goal.l3,
    };
    expect(actions.addGoal(goal)).toEqual(expectedAction);
  });

  it('should create an action to remove a goal', () => {
    const goal = {
      id: 'goal_1',
      l2: 'level2',
      l3: 'level3',
    };
    const expectedAction = {
      type: types.REMOVE_GOAL,
      id: goal.id,
    };

    expect(actions.removeGoal(goal.id)).toEqual(expectedAction);
  });
});
