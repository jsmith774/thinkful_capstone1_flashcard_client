import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
