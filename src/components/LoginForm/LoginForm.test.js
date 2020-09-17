import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders learn react link', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
