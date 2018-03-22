import React, { Component } from 'react';

class Mushroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poisonous: true,
      age: this.props.age
    }
  }
  componentWillUpdate() {
    return false;
  }

  //
  shouldComponentUpdate(nextProps, nextState) {

    return false;
  }

  render() {
    console.log("rendering child mushroom");
    // this.props.reduceAge();
    return (
      <div>
      <div>__</div>
      <div>(||)</div>
      <div>||</div>
      <button onClick={() => this.props.poison()}>POISON</button>

      </div>
    )

  }


}

export default Mushroom
