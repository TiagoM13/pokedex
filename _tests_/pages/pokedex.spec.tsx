import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Pokedex } from '@pages';
import { render, screen } from '@testing-library/react';

describe('<Pokedex />', () => {
  it('should render the page Pokedex', () => {
    render(
      <>
        <BrowserRouter>
          <Pokedex />
        </BrowserRouter>
      </>
    );
    expect(screen.getByText('Select your pokemon')).toBeInTheDocument();
  });
});
