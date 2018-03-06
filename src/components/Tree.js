import React, { Component } from 'react';

class Tree extends Component {

  // instanstiates props and describes local state.
  constructor(props) {
    console.log("constructor called");
    super(props);
    // local dynamic variables.
    this.state = {
      soilLevel: this.props.age/4,
      // fertilizer: 'brawn',
      age: this.props.age,
      growthRate: 1,
      status: 'growing',
      online: true
    }
  }

  // opinion: rarely needed, depends on individual design pattern.
  componentWillMount() {

  }

  // componentDidMount fires AFTER render
  componentDidMount() {
    console.log("componentDidMount()");
    // fetch calls in vanilla react happen here

    let growInterval = setInterval(
      () => this.grow(),
      1000
    );
    this.setState({ growInterval: growInterval })

  }

  // shouldcomponentupdate gets called to see whether or not the component should update
  shouldComponentUpdate(nextProps, nextState) {
      // if (!nextState.online) {return false};
      if (nextState.age === 0 && nextState.growthRate === 0 && nextState.status === 'growing') { return false };
      return true;
  }

  //
  componentWillUpdate(){
    // component
  }

  componentDidUpdate() {
    // figure out why the component updated? is there a side effect forcing a rerender?
    // we find out here.
  }

  componentWillUnmount() {
    // clear ALL intervals before leaving the page;
    clearInterval(this.state.growInterval);

  }

  grow() {
    console.log('grow() called');
    this.setState({
      age: this.state.age+(1 * this.state.growthRate),
      soilLevel : this.state.age/4
    })
  }

  toggleGrowth() {
    if (this.state.status === 'growing') {
      this.setState({
        status: 'paused'
      })
      clearInterval(this.state.growInterval);
    } else {
      let growInterval = setInterval(
        () => this.grow(),
        1000
      );

      this.setState({
        status: 'growing',
        growInterval: growInterval

       })
    }
    console.log('pausing growth');

  }

  trunk() {
    let trunk = []
    for (let i = 0; i < this.state.age; i++) {
      trunk.push(<div>| |</div>);
    }
    return trunk;
  }

  addFertilizer(brand) {
    if (brand === 'fish') {
      console.log('setting growth rate')
      this.setState({
        growthRate: 2
      })
    } else if (brand === 'poison') {
      this.setState({
        growthRate: 0,
        age: 0,
        soilLevel: this.state.growthRate/4
      })
    }
    clearInterval(this.state.growInterval);

  }




  // choose what to render on the DOM, i.e divs and divs
  render() {
    console.log("RENDER");
    return (
      <div>
      <h1> AGE: {this.state.age}</h1>
      <h1> GROWTH RATE: {this.state.growthRate} </h1>
      <h1> STATUS: {this.state.status} </h1>
      <h1> SOIL LEVEL: {this.state.soilLevel} </h1>
        {this.trunk()}
        // \\<br/>

        <button onClick={() => this.toggleGrowth()}>TOGGLE GROWTH</button>
        <button onClick={() => this.addFertilizer('poison')}>Add Poison</button>

        <button onClick={() => this.addFertilizer('fish')}>Add fish</button>
      </div>
    )
  }
}

export default Tree;
