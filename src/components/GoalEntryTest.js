import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class GoalEntryForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, onSubmit } = this.props

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">L1</label>
          <Field
            name="id"
            component="input"
            type="text" />
        </div>
        <div>
          <label htmlFor="l2">L2</label>
          <Field
            name="l2"
            component="input"
            type="text"/>
        </div>
        <div>
          <label htmlFor="l2">L3</label>
          <Field
            name="l3"
            component="input"
            type="text"/>
        </div>
        <button type="submit">Submit</button>

      </form>
    )
  }
}


class GoalEntryContainer extends Component {

    constructor() {
        super();
        this.handleGoalSubmit = this.handleGoalSubmit.bind(this);
    }

    handleGoalSubmit(values) {
        const { dispatch } = this.props;
        let goal = {
          id: values.id,
          l2: values.l2,
          l3: values.l3
        }
        dispatch(actionCreators.addGoal(goal))
    }

    render() {
        return (
            <GoalEntryForm {...this.props}
            onSubmit={this.handleGoalSubmit} />
        )
    }
}

export default reduxForm({
  // a unique name for the form
  form: 'goalEntryForm',
})(GoalEntryContainer);
