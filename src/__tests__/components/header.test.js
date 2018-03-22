import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header';

const user = {
  username: 'fda',
  password: 'password',
};

it('renders without crashing with vanilla react', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Header user={user} />
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// using enzyme
it('renders without crashing with enzyme', () => {
  let userWrongType = [];
  const wrapper = shallow(<Header user={user}/>);
  expect(wrapper.contains('h1'));
});

//using jest
test('renders without crashing with jest snapshots', () => {
  const john = {
    username: 'john',
    password: 'wick',
  };
  const wrapper = shallow(
    <Header user={john}/>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
