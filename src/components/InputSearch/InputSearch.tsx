import React from 'react';

import { ISearchButton } from '@interfaces';
import { MagnifyingGlass } from 'phosphor-react';

export const InputSearch = ({ getFilterPokemon }: ISearchButton) => {
  return (
    <div className="flex items-center flex-col gap-2 py-6 px-1 mx-4 mb-2">
      <div className="flex flex-col items-center gap-1 relative">
        <label htmlFor="search" className="text-2xl font-semibold">
          Select your pokemon
        </label>
        <div className="flex justify-center w-[400px] screen-1x:w-screen screen-1x:px-8">
          <input
            onChange={(e) => getFilterPokemon(e.target.value)}
            id="search"
            type="text"
            placeholder="Search pokemons..."
            className="w-full text-zinc-500 border border-zinc-400 bg-zinc-100 rounded-xl mx-1 py-2 px-2 shadow-sm focus:outline-none focus:border-zinc-600 placeholder:italic placeholder:text-zinc-500"
          />
          <span className="inline-block px-2 py-3 -ml-10">
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
