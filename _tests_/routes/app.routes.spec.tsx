import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@routes';
import { render } from '@testing-library/react';

describe('Routes', () => {
  it('should render Home component on "/" route', () => {
    // Altera a rota para '/Pokedex' antes de renderizar a aplicação
    render(<RouterProvider router={router} />);

    // Verifica se a rota padrão é a home
    expect(window.location.pathname).toBe('/');
  });

  it('should render Pokedex component on "/Pokedex" route', () => {
    window.history.pushState({}, 'Test page', '/Pokedex');

    render(<RouterProvider router={router} />);

    // Verifica se a rota atual é a '/Pokedex'
    expect(window.location.pathname).toBe('/Pokedex');
  });
});
