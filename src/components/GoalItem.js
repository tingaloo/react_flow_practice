import React, { Component } from 'react';

import type { Goal } from '../types/goals';

export type Props = {
  goal: Goal
}

const GoalItem = ({goal} : Props) => (
  <div>
  <span>L1: {goal.id} | </span>
  <span>L2: {goal.l2} |</span>
  <span>L3: {goal.l3} </span>
 </div>
)

export default GoalItem
