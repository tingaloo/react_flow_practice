
import React from 'react';
import PropTypes from 'prop-types';

import type {User} from '../types/user';

// using flow
export type Props = {
  user: User
}



const Header = ({ user }: Props) => (
  <div>
  <h1> This is the header</h1>
  {user.username ? 'Welcome ' + user.username + "!" : `Please login with the form below`}
  </div>
)

// using proptypes (npm library)
Header.propTypes = {
  username: PropTypes.string,
  user: PropTypes.object
}

export default Header
