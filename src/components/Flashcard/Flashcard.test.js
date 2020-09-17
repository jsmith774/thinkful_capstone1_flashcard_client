import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Flashcard from './Flashcard';

test('renders learn react link', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flashcard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
