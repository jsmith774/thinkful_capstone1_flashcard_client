import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import CheckboxGroup from './CheckboxGroup';

test('renders learn react link', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckboxGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
