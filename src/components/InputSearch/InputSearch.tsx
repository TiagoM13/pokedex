import React from 'react';

import { MagnifyingGlass } from 'phosphor-react';

interface Props {
  onChange: (query: string) => void;
  query: string;
}

export const InputSearch = ({ query, onChange }: Props) => {
  return (
    <div className="mx-4 mb-2 flex flex-col items-center gap-2 py-6 px-1">
      <div className="relative flex flex-col items-center gap-1">
        <label htmlFor="search" className="text-2xl font-semibold">
          Select your pokemon
        </label>
        <div className="flex w-[400px] justify-center screen-1x:w-screen screen-1x:px-8">
          <input
            onChange={(e) => onChange(e.target.value)}
            id="search"
            type="text"
            value={query}
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
