import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import PrivateRouteWithAuth from './containers/PrivateRouteWithAuth';
import './App.css';
import GoalEntryContainer from './components/GoalEntryTest';
import HeaderContainer from './containers/Header';

// import GoalTable from './containers/GoalTable';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Tree from './pages/Tree';

import JsonSchemaForm from './components/JsonSchemaForm';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <HeaderContainer />

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/jsonschemaform" component={JsonSchemaForm} />
          <Route exact path="/tree" onEnter={()=> console.log('entered')} component={Tree} />
        </div>
      </Router>
    );
  }
}

//
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
//   <GoalEntryContainer/>
//   <GoalTable />

export default App;
