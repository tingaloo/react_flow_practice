
import React, { Component } from 'react';

const Header = ({ user }) => (
  <div>
  <h1> This is the header</h1>
  {user.username ? 'Welcome ' + user.username + "!" : `Please login with the form below`}
  </div>
)

export default Header
