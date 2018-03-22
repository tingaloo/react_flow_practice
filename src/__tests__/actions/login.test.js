import axios from 'axios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
// import fetchMock from 'fetch-mock';

import * as actions from '../../actions/';
import * as types from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('login', async () => {
  it('creates LOGIN_SUCCESS when login has been done', async () => {
    const mock = new MockAdapter(axios);
    const store = mockStore({ });
    const url = 'http://jsonplaceholder.typicode.com/posts';
    const user = {
      username: 'fdf',
      password: 'fdfd',
    };

    mock.onGet(url).reply(200, {
      user: {username:user.username, password:user.password}
    });


    const expectedActions = [
      {
        isLoading: true,
        type: types.LOGIN_LOADING
       },
      {
        isLoading: false,
        type: types.LOGIN_LOADING
       },
      { type: types.LOGIN_SUCCESS,
        username: user.username,
        password: user.password}
    ]
    await store.dispatch(actions.login(user));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
