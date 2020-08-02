import React from 'react';

import { render } from '@testing-library/react';

import Home from './index.page';

describe('Home', () => {
  it('renders home page', () => {
    render(<Home />);
  });
});
