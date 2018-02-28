// @flow

import React, {Component} from 'react';
import GoalItem from './GoalItem';

import type { Goals, Id } from '../types/goals';

export type Props = {
  goals: Goals,
  removeGoal: (id: Id) => void
}
const GoalList = ({ goals, removeGoal }: Props) => (
  <ul>
  {goals.map(goal => (
    <div>
      <GoalItem goal={goal} onClick={() => removeGoal(goal.id)}/>
    </div>
   ))}
  </ul>
)

export default GoalList
