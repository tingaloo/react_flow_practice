
import React, { Component } from 'react';

import type {User} from '../types/user';

export type Props = {
  user: User
}

const Header = ({ user }: Props) => (
  <div>
  Welcome {user.username} to demo app
  </div>
)

export default Header
