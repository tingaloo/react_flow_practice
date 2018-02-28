// @flow

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions';
import { removeGoal } from '../actions';
import GoalList from '../components/GoalList';

import type { Connector } from 'react-redux';

import type { State, Dispatch } from '../types';
import type { Props } from '../components/GoalList';

const mapStateToProps = (state: State) => {
  return {
    goals: state.goals
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  // inject ALL action creators from actions file.
  // return { actions: bindActionCreators(actionCreators, dispatch) }
  // injects select imported Actions
  return bindActionCreators( {removeGoal}, dispatch);
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(GoalList);
