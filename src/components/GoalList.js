// @flow

import React, {Component} from 'react';
import GoalItem from './GoalItem';

import type { Goals } from '../types/goals';

export type Props = {
  goals: Goals
}

const GoalList = ({ goals }: Props) => (
  <ul>
  {goals.map(goal => (
    <GoalItem goal={goal}/>
   ))}
  </ul>
)

export default GoalList
