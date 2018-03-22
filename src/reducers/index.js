import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import goals from './goals';
import { loginError, loginLoading, user } from './user';


const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  goals,
  loginError,
  loginLoading,
  user,
});

export default rootReducer;
