import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import TimerContainer from './TimerContainer';

jest.mock('react-redux');

describe('TimerContainer', () => {
  const currentSeconds = 1000;

  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ currentSeconds }));
  });

  it('calls dispatch', () => {
    render(<TimerContainer />);

    expect(dispatch).toBeCalled();
  });
});
