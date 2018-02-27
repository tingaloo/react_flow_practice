// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as actionCreators from '../actions';
import {login} from '../actions';

import { reduxForm } from 'redux-form';
import LoginForm from '../components/LoginForm';

import type { Dispatch } from '../types';
import type { Connector } from 'react-redux';

export type Props = {
  dispatch: Dispatch;
  handleSubmit: (Function) => void,
}

console.log("another one");
class LoginContainer extends Component<Props> {
  constructor() {
    super();
  }

  login = values => {
    let user = {
      username: values.username,
      password: values.password
    }
    this.props.dispatch(login(user));
  }

  render() {
    return (
      <LoginForm {...this.props}
      onSubmit={this.login} />
    )
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'loginForm',
})(LoginContainer);
