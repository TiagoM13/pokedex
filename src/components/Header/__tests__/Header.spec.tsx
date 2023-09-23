import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { getByText, render } from '@testing-library/react';

import { Header } from '../Header';

describe('<Header/>', () => {
  it('should render correctly', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logo = getByAltText('Pokémon');
    const image = getByAltText('Pikachu');

    expect(getByText('Home')).toBeTruthy();
    expect(image).toBeTruthy();
    expect(logo).toBeTruthy();
  });

  it('should contain the correct URL in the link', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const icon = getByTestId('arrow-icon');
    const link = getByTestId('link');
    expect(icon).toBeTruthy();
    expect(link).toHaveAttribute('href', '/');
  });
});
