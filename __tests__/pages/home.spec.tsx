import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Home } from '@pages';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
  it('should render the page Home', () => {
    render(
      <>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </>
    );
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
  });
});
