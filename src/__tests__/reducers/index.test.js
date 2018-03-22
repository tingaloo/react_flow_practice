// @flow

import reducer from '../../reducers';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      "form": {},
      "goals": [],
      "loginError": false,
      "loginLoading": false,
      "user": {},
  })
  });
})
