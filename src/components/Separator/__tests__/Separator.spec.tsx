import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { PokemonProvider } from '@contexts';
import { act, render } from '@testing-library/react';

import { Separator } from '../Separator';

describe('Separator', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('displays the correct Pokémon count', () => {
    const mockContext = {
      loading: true,
      pokemons: [{}, {}, {}],
    };

    const usePokemonContext = jest.fn();

    act(() => {
      usePokemonContext.mockReturnValue(mockContext);
    });

    const { getByTestId } = render(
      <PokemonProvider>
        <Separator data={[]} />
      </PokemonProvider>
    );

    const countText = getByTestId('pokemon-count');
    expect(countText).toHaveTextContent(`0 Pokémon`);
  });
});
