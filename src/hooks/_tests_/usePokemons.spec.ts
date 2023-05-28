/* eslint-disable import/extensions */
import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { useGetPokemonsData } from '../usePokemons';

const mock = new MockAdapter(axios);
describe('useGetPokemonsData', () => {
  beforeEach(() => {
    mock.reset(); // Reseta o mock antes de cada teste
  });

  it('should fetch and set pokemons data', async () => {
    const mockPokemons = [
      { id: 1, name: 'Pikachu' },
      { id: 2, name: 'Charmander' },
      // Adicione mais objetos de pokemons mockados, se necessário
    ];

    // mock.onGet(process.env.VITE_URL_API).reply(200, mockPokemons);
    const mock = new MockAdapter(axios);
    mock.onGet(process.env.VITE_URL_API).reply(200, mockPokemons);

    const { result } = renderHook(() => useGetPokemonsData());

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await result.current.getPokemons(); // Chame a função getPokemons diretamente
    });

    expect(result.current.loading).toBe(false);
    expect(mockPokemons).toEqual(mockPokemons);
  });
});
