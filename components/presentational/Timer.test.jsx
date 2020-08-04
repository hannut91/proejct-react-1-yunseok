import React from 'react';

import { render, screen } from '@testing-library/react';

import Timer from './Timer';

const { queryByText } = screen;

describe('Timer', () => {
  it('renders timer', () => {
    render(<Timer />);

    expect(queryByText('25:00')).toBeInTheDocument();
  });
});
