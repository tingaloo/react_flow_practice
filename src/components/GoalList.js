// @flow

import React, {Component} from 'react';

import type { Goals } from '../types/goals';

export type Props = {
  goals: Goals
}

const GoalList = ({ goals, onSave }: Props) => (
  <ul>
  {goals.map(goal => (
      <div>
     <h1>{goal.id}</h1>
     </div>
   ))}
  </ul>
)

export default GoalList
