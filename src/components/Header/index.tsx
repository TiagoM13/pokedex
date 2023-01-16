/* eslint-disable no-restricted-syntax */
import React from 'react';

import { MagnifyingGlass } from 'phosphor-react';

import Pokebola from '../../assets/logo/logo_pokebola.png';

interface Props {
  onFilterPokemon: (e: string) => void;
}

export const Header = ({ onFilterPokemon }: Props) => {
  const title = 'Pokédex';

  return (
    <header className="bg-[#025fca]">
      <div className="flex justify-between items-center py-6 px-1 mx-4 mb-2">
        <div className="flex items-center">
          <img
            src={Pokebola}
            alt="Pokebola"
            loading="lazy"
            className="w-[15%] pr-2"
          />
          <h1 className="text-[#fcefd4] font-bold text-3xl text-center">
            {title}
          </h1>
        </div>
        <div className="flex items-center relative">
          <input
            onChange={(e) => onFilterPokemon(e.target.value)}
            name="Search"
            type="text"
            placeholder="Escolha um pokémon..."
            className="placeholder:italic placeholder:text-slate-400 text-zinc-500 border border-slate-300 bg-zinc-100 rounded-md mx-1 py-1 px-2 shadow-sm focus:outline-none focus:border-zinc-500 focus:ring-1"
          />
          <button
            type="submit"
            className="px-2 py-1.5 right-1 font-semibold text-sm rounded-md absolute hover:bg-slate-200 transition"
          >
            <MagnifyingGlass size={20} color="#aaa" weight="bold" />
          </button>
        </div>
      </div>
    </header>
  );
};
