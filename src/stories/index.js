import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { browserHistory } from 'react-router';
import { MemoryRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header';
import Tree from '../components/Tree';
import LoginContainer from '../containers/Login';
import reducers from '../reducers';
import HeaderContainer from '../containers/Header';
import Navbar from '../components/Navbar';

import Home from '../pages/Home';
import Login from '../pages/Login';
import TreePage from '../pages/Tree';
import JsonSchemaForm from '../components/JsonSchemaForm';

import 'semantic-ui-css/semantic.min.css';


const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  // const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  applyMiddleware(thunk),
  compose(applyMiddleware(...middlewares)),
);
const user = {
  username: 'jake',
  password: 'jacob'
}

storiesOf('Navbar', module)
  .addDecorator(story => <Provider store={store}><Router>{story()}</Router></Provider>)
  .add('renders properly', () => (
    <div>
    <Navbar />
    </div>
  ))
  .add('renders pages properly with state', () => (
    <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/jsonschemaform" component={JsonSchemaForm} />
    <Route exact path="/tree" onEnter={()=> console.log('entered')} component={TreePage} />
    </div>
  ));

storiesOf('Header', module)
  .add('with user object', () => (
    <Header user={user} />
  ));

storiesOf('Tree', module)
  .add('renders correctly', () => (
    <Tree age={1} />
  ));

storiesOf('Login Form', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('renders form', () => (
    <div>
    <LoginContainer />
    </div>
  ))
  .add('connects header with form', () => (
    <div>
    <HeaderContainer />
    <LoginContainer />
    </div>
  ));
