import React, { Component } from 'react';

class Tree extends Component {

  // instanstiates props and describes local state.
  constructor(props) {
    console.log("constructor called");
    super(props);
    // local dynamic variables.
    this.state = {
      soilLevel: 0,
      fertilizer: 'brawn',
      loading: true,
      age: this.props.age
    }
  }

  // opinion: rarely needed, depends on individual design pattern.
  componentWillMount() {

  }

  // componentDidMount fires AFTER render
  componentDidMount() {
    console.log("componentDidMount()");
    setInterval(
      () => this.grow(),
      1000
    );
  }

  grow() {
    this.setState({
      age: this.state.age+1
    })
  }

  //


  // choose what to render on the DOM, i.e divs and divs
  render() {
    console.log("RENDER");
    return (
      <div>
        {this.state.age}<br />
        // \\

      </div>
    )
  }
}

export default Tree;
