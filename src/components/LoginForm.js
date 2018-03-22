// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Form, Input, Grid } from 'semantic-ui-react';

import * as validate from '../common/validations';
// using Flow
type Props = {
  handleSubmit: (Function) => void,
  onSubmit: ({username: string, password: string}) => void,
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const semanticFormField = ({ input, type, label, placeholder, meta: { touched, error, warning }, as: As = Input, ...props }) => {
  function handleChange (e, { value }) {
    return input.onChange(value);
  }
  return (

    <Form.Field>
      <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder} onChange={handleChange} />
      {touched && ((error && <span><i>{error}</i></span>) || (warning && <span><i>{warning}</i></span>))}
    </Form.Field>
  );
}

class LoginForm extends Component<Props> {
  render() {
    const {handleSubmit, onSubmit } = this.props
    return (
      <Grid>
      <Grid.Column floated='left' width={5}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field
            name="username"
            component={semanticFormField} as={Form.Input}
            type="text"
            label="Username"
            validate={validate.required} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <Field
            name="password"
            component={semanticFormField} as={Form.Input}
            type="password" />
        </div>
        <button type="submit">Submit</button>
      </Form>
      </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm;
