// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import Header from '../components/Header';

type Props = {
  // state: {}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loginLoading,
    error: state.loginError,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
