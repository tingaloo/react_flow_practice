
import React, { Component } from 'react';

import type {User} from '../types/user';

export type Props = {
  user: User
}

const Header = ({ user }: Props) => (
  <div>
  <h1> This is the header</h1>
  {user.username ? 'Welcome ' + user.username + "!" : `Please login with the form below`}
  </div>
)

export default Header
