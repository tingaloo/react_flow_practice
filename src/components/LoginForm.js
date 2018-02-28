// @flow

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

type Props = {
  handleSubmit: (Function) => void,
  onSubmit: ({username: string, password: string}) => void,
}
//
// const required = value => (value ? undefined : 'Required')
// const alphaNumeric = value =>
//   value && /[^a-zA-Z0-9 ]/i.test(value)
//     ? 'Only alphanumeric characters'
//     : undefined

class LoginForm extends Component<Props> {
  render() {
    const {handleSubmit, onSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">username</label>
          <Field
            name="username"
            component="input"
            type="text" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <Field
            name="password"
            component="input"
            type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default LoginForm;
