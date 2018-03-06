// @flow

import { addGoal, removeGoal } from '../../actions';
import goals from '../../reducers/goals';

describe('goals reducer', () => {
  const goal = {
    id: 'example1',
    l2: 'level2',
    l3: 'level3'
  }

  const goal2 = {
    id: 'second_goal',
    l2: 'foo',
    l3: 'bar'
  }
  it ('should handle initial state', () => {
    expect(goals(undefined, { type: '@@INIT' })).toEqual([])
  });

  it('should handle ADD_GOAL', () => {


    expect(goals([], addGoal(goal))).toEqual([
      {
        id: 'example1',
        l2: 'level2',
        l3: 'level3'
      }
    ])

    expect(goals([goal], addGoal(goal2))).toEqual([
      {
        id: 'example1',
        l2: 'level2',
        l3: 'level3'
      },
      {
        id: 'second_goal',
        l2: 'foo',
        l3: 'bar'
      }
    ])
  })

  it('should handle REMOVE_GOAL', () => {
    expect(goals([goal,goal2], removeGoal('example1'))).toEqual([
      {
        id: 'second_goal',
        l2: 'foo',
        l3: 'bar'
      }
    ])
  })

})
