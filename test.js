import React from 'react';
import TestComponent from './index.jsx';
import style from './index.css';
import test from 'ava';
import { shallow } from 'enzyme';

test('root tag is an input', t => {
  const wrapper = shallow(<TestComponent />);
  t.is(wrapper.type(), 'span');
});

test('root class is applied', t => {
  const wrapper = shallow(<TestComponent />);
  t.true(wrapper.hasClass(style.root));
});
