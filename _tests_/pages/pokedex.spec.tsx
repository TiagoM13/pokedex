import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Pokedex } from '@pages';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('<Pokedex />', () => {
  it('should render the page Pokedex', async () => {
    const mockPokemons = [
      { id: 1, name: 'Pikachu' },
      { id: 2, name: 'Charmander' },
      // Adicione mais objetos de pokemons mockados, se necessário
    ];

    const mock = new MockAdapter(axios);
    mock.onGet().reply(200, mockPokemons);

    render(
      <>
        <BrowserRouter>
          <Pokedex />
        </BrowserRouter>
      </>
    );

    await screen.findByText('Select your pokemon');

    expect(screen.getByText('Select your pokemon')).toBeInTheDocument();
  });
});
