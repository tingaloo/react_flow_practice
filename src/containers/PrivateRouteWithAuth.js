import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

// currently broken until further notice.

// const PrivateRoute = ({ component: Component, ...rest, user }) => {
//   console.log(user);
//   console.log(Object.keys(user).length === 0)
// return <div>{user.username}</div>}

// route does not update on store state change?
const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Object.keys(user).length !== 0 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const PrivateRouteWithAuth = connect(
  mapStateToProps,
)(PrivateRoute);

export default PrivateRouteWithAuth
