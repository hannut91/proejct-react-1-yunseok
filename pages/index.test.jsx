import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import Home from './index.page';

jest.mock('react-redux');

describe('Home', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentSeconds: 1000,
    }));
  });

  it('renders home page', () => {
    render(<Home />);
  });
});
