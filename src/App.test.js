import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const component = create(<App/>).toJSON();
  expect(component).toMatchSnapshot();
});
