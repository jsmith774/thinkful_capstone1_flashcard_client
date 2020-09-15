import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ButtonList from './ButtonList';

test('renders learn react link', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
