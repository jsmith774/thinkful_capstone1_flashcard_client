import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Section } from './Utils';

test('renders learn react link', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Section />, div);
  ReactDOM.unmountComponentAtNode(div);
});
