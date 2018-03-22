import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Divider, Grid, Image, Menu, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import type {User} from '../types/user';

// using flow
export type Props = {
  user: User
}

const HeaderMain = ({ user, loading }: Props) => (

  <div>
  <Header size='huge'> React Boilerplate </Header>
    {loading && !user.username && "Loading"}
    {user.username ? "Welcome "+user.username : "Login will ya?" }

  </div>

)

export default HeaderMain
