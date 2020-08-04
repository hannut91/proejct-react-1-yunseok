import React from 'react';

import { render, screen } from '@testing-library/react';

import dayjs from 'dayjs';

import Timer from './Timer';

const { queryByText } = screen;

describe('Timer', () => {
  const currentSeconds = 60 * 1000;
  it('renders timer', () => {
    render(<Timer currentSeconds={60 * 1000} />);

    expect(queryByText(dayjs(currentSeconds).format('mm:ss')))
      .toBeInTheDocument();
  });
});
