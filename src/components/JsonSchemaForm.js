import React, { Component } from 'react';

import Form from 'react-jsonschema-form';

const schema = {
  title: "Awardee Overview",
  description: "https://github.com/mozilla-services/react-jsonschema-form, uses html5 validation",
  type: "object",
  required: ["title"],
  properties: {
    awardee: {type: "string", title: "Awardee", default: "populated"},
    grantProgram: {type: "string", title: "Grant Program", default: "HHS"},
    foa: {type: "string", title: "foa", default: ""},
    projectPeriod: {type: "string", title: "project period", format: "date-time"},
        "alt-date": {
          "type": "string",
          "format": "date"
        }
  }
};

const log = (type) => console.log.bind(console, type);

class jsonSchemaForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch schema in container.
  }
  render() {
    return (
      <div>
      <h1>React Json Schema Form by Firefox</h1>
      <Form schema={schema}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")} />
      </div>
    )
  }
}

export default jsonSchemaForm;
