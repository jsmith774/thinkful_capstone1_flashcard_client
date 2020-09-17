import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ItemList from './ItemList';

test('renders learn react link', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
