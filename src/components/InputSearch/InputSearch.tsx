import React from 'react';

import { usePokemonContext } from '@hooks';
import { MagnifyingGlass } from 'phosphor-react';

export const InputSearch = () => {
  const { filterPokemon } = usePokemonContext();

  return (
    <div className="mx-4 mb-2 flex flex-col items-center gap-2 py-6 px-1">
      <div className="relative flex flex-col items-center gap-1">
        <label htmlFor="search" className="text-2xl font-semibold">
          Select your pokemon
        </label>
        <div className="flex w-[400px] justify-center screen-1x:w-screen screen-1x:px-8">
          <input
            onChange={(e) => filterPokemon(e.target.value)}
            id="search"
            type="text"
            placeholder="Search pokemons..."
            className="mx-1 w-full rounded-xl border border-zinc-400 bg-zinc-100 py-2 px-2 text-zinc-500 shadow-sm placeholder:italic placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
          />
          <span className="-ml-10 inline-block px-2 py-3">
            <MagnifyingGlass
              size={20}
              weight="bold"
              className="text-zinc-500"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
