/* eslint-disable import/extensions */
import { renderHook, act } from '@testing-library/react';

import { mockPokemons } from '../../../jest/setup-tests';
import { useGetPokemonsData } from '../usePokemons';

describe('useGetPokemonsData', () => {
  it('should fetch and set pokemons data', async () => {
    const { result } = renderHook(() => useGetPokemonsData());

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await result.current.getPokemons();
    });

    expect(result.current.loading).toBe(false);
    expect(mockPokemons).toEqual(mockPokemons);
  });
});
