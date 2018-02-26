import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoalEntryForm from './components/GoalEntryForm';
import GoalEntryContainer from './components/GoalEntryTest';
import LoginContainer from './containers/Login';
import HeaderContainer from './containers/Header';

import GoalTable from './containers/GoalTable';

class App extends Component {

  render() {
    return (
      <div className="App">
      <HeaderContainer />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginContainer />
        <GoalEntryContainer/>
        <GoalTable />
      </div>
    );
  }
}

export default App;
