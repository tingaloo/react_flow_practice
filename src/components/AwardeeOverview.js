import React, { Component } from 'react';
import { Form, Input, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class AwardeeOverview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <Grid>
      <Grid.Column floated='left' width={5}>
      <Form>
        <div>
        <label htmlFor="awardee">Awardee</label>

          <Field
            name="username"
            component="input"
            type="text"
            label="Username"
            />
        </div>
        <div>
          <label htmlFor="program">Program</label>
          <Field
            name="program"
            component="input"
            type="text" />
        </div>
        <div>
          <label htmlFor="foa">FOA</label>
          <Field
            name="password"
            component="input"
            type="text" />
        </div>
        <div>
          <label htmlFor="projectPeriod">Project period</label>
          <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />
    <DatePicker
  selected={this.state.startDate}
  onChange={this.handleChange}
/>
<label htmlFor="budgetPeriod">Budget period</label>
<DatePicker
selected={this.state.startDate}
onChange={this.handleChange}
/>
<DatePicker
selected={this.state.startDate}
onChange={this.handleChange}
/>
<div>
  <label htmlFor="revisionNumber">Revision Number</label>
  <Field
    name="revisionNumber"
    component="input"
    type="text" />
</div>
<div>
  <label htmlFor="revisionReason">Reason for Revision</label>
  <Field
    name="revisionReason"
    component="input"
    type="text" />
</div>
<div>
  <label htmlFor="fundingSource">Funding Source</label>
  <Field
    name="fundingSource"
    component="input"
    type="text" />
</div>


        </div>
        <button type="submit">Submit</button>
      </Form>
      </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'awardeeForm'
})(AwardeeOverview);

// export default AwardeeOverview;
