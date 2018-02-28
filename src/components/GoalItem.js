// @flow

import React, { Component } from 'react';

import type { Goal } from '../types/goals';

export type Props = {
  onClick: () => void,
  goal: Goal
}

const GoalItem = ({onClick, goal} : Props) => (
  <div>
    <span>L1: {goal.id} | </span>
    <span>L2: {goal.l2} |</span>
    <span>L3: {goal.l3} </span>
    <span onClick={onClick}> Remove </span>
 </div>
)

export default GoalItem
