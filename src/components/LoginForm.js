// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';

import PropTypes from 'prop-types';

// using Flow
type Props = {
  handleSubmit: (Function) => void,
  onSubmit: ({username: string, password: string}) => void,
}

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

LoginForm.propTypes = {
  handleSubmsfadsit: PropTypes.func.isRequired
}

export default LoginForm;
