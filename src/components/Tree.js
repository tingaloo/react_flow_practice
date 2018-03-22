import React, { Component } from 'react';
import axios from 'axios';

import Mushroom from './Mushroom';

const url =`https://picsum.photos/list`
class Tree extends Component {

  // instanstiates props and describes local state.
  constructor(props) {
    console.log("constructor");
    super(props);
    // local dynamic variables and initial values
    this.state = {
      soilLevel: this.props.age/4,
      // fertilizer: 'brawn',
      age: this.props.age,
      trunk: this.props.age,
      growthRate: 1,
      status: 'growing',
      logs: 0,
      online: false,

    }
  }

  // opinion: rarely needed, depends on individual design pattern.
  componentWillMount() {
    // based on props, set local state based on that.
  }

  // componentDidMount fires AFTER render
  componentDidMount() {
    console.log("componentDidMount()");
    // fetch calls in vanilla react happen here

    // axios.get(url)
    //   .then((response) => {
    //     console.log(response.data[0].width);
    //     if (response.data[0].width === 5616){
          this.initializeTreeLifecycle();
    //     }
    //   })



  }

  // shouldcomponentupdate gets called to see whether or not the component should update
  shouldComponentUpdate(nextProps, nextState) {
      // if (!nextState.online) {return false};
      if (nextState.age === 0 && nextState.growthRate === 0 && nextState.status === 'growing') { return false };
      return true;
  }



  // run AFTER update
  componentDidUpdate() {
    // figure out why the component updated? is there a side effect forcing a rerender?
    // we find out here.
  }

  // used for complex render scenarios
  componentWillUpdate(nextProps, nextState){
    // most useful for dispatching operations AFTER UPDATE
  }

  componentWillUnmount() {
    // clear ALL intervals before leaving the page;
    clearInterval(this.state.growInterval);
  }

  initializeTreeLifecycle() {
    let growInterval = setInterval(
      () => this.grow(),
      1000
    );
    this.setState({
      growInterval: growInterval,
      online: true
    })
  }

  poison() {
    console.log("mushroom poisoning");
    this.setState({
      growthRate: 0,
      // age: 0,
    })
  }

  grow() {
    console.log('GROW() action called');
    this.setState({
      age: this.state.age + 1,
      trunk: this.state.trunk + (1 * this.state.growthRate),
      soilLevel : this.state.age/4
    })
  }

  toggleGrowth() {
    console.log("toggle growth");
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
  }

  trunk() {
    let trunk = []

    for (let i = 0; i < this.state.trunk; i++) {
      trunk.push(<div>#@%%%%%:;;</div>);
    }
    return trunk;
  }

  addFertilizer(brand) {
    if (brand === 'brauns') {
      console.log('setting growth rate')
      this.setState({
        growthRate: 2
      })
    } else if (brand === 'poison') {
      this.setState({
        growthRate: 0,
        // age: 0,
      })
    }
  }

  chop() {
    this.setState({
      logs: this.state.logs + this.state.trunk,
      trunk: 0
    })
  }


  // choose what to render on the DOM, i.e divs and divs
  render() {
    console.log("RENDER");
    if (!this.state.online) {
      return (
        <div>Tree isn't online for some reason.. </div>
      )
    }
    return (
      <div>
      <h2> AGE: {this.state.age}</h2>
      <h2> GROWTH RATE: {this.state.growthRate} </h2>
      <h2> STATUS: {this.state.status} </h2>
      <h2> TRUNK SIZE: {this.state.trunk} </h2>
      <h2> SOIL LEVEL: {this.state.soilLevel} </h2>
      <h2> LOGS COLLECTED: {this.state.logs} </h2>
      <div>
      <button onClick={() => this.toggleGrowth()}>TOGGLE TIME</button>
      <button onClick={() => this.addFertilizer('poison')}>Add Poison</button>
      <button onClick={() => this.chop()}>CHOP</button>
      <button onClick={() => this.addFertilizer('brauns')}>Add Braun's Fertilizer</button>
      </div>
      <div>
      `:;%.    ;%%. %@;        %; ;@%;%'<br/>
                    `:%;.  :;bd%;          %;@%;'<br/>
                      `@%:.  :;%.         ;@@%;'<br/>
                        `@%.  `;@%.      ;@@%;<br/>
                          `@%%. `@%%    ;@@%;<br/>
                            ;@%. :@%%  %@@%;       <br />
                              %@bd%%%bd%%:; <br />
        {this.trunk()}
        %@@@%(o);  . '<br />
                                %@@@o%;:(.,'<br />
                            `.. %@@@o%::;<br />
                               `)@@@o%::;<br />
                                %@@(o)::;<br />
                               .%@@@@%::;<br />
                               ;%@@@@%::;.<br />
                              ;%@@@@%%:;;;.<br />
                          ...;%@@@@@%%:;;;;,..
        </div>
                          <Mushroom age={1} treeAge={this.state.age} poison={() => this.poison()} />


      </div>
    )
  }
}

export default Tree;
