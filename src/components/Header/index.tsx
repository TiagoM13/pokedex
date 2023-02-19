/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MagnifyingGlass } from 'phosphor-react';

import Pokebola from '../../assets/logo/logo_pokebola.png';
import { IHeader } from '../../interfaces/header';
import { paths } from '../../routes/app_route';

export const Header = ({ getFilterPokemon }: IHeader) => {
  const [isPlaceholder, setIsPlaceholder] = useState(false);

  const onSearchPlaceholder = () => {
    setIsPlaceholder(!isPlaceholder);
  };

  return (
    <header className="bg-[#fe6613]">
      <div className="flex justify-between items-center py-6 px-1 mx-4 mb-2">
        <Link to={paths.HOME} reloadDocument>
          <div className="flex items-center">
            <img
              src={Pokebola}
              alt="Pokebola"
              loading="lazy"
              className="w-[15%] pr-2"
            />
            <h1 className="text-white font-extrabold text-3xl">Pokédex</h1>
          </div>
        </Link>
        <div className="flex items-center relative">
          <input
            onChange={(e) => getFilterPokemon(e.target.value)}
            onFocus={onSearchPlaceholder}
            onBlur={onSearchPlaceholder}
            name="Search"
            type="text"
            placeholder={isPlaceholder ? '' : 'Search pokemons...'}
            className="placeholder:italic placeholder:text-slate-400 text-zinc-500 border border-slate-300 bg-zinc-100 rounded-md mx-1 py-1 px-2 shadow-sm focus:outline-none focus:border-zinc-500 focus:ring-1"
          />
          <button
            type="button"
            className="px-2 py-1.5 right-1 font-semibold text-sm rounded-md absolute hover:bg-slate-200 transition"
          >
            <MagnifyingGlass size={20} color="#aaa" weight="bold" />
          </button>
        </div>
      </div>
    </header>
  );
};
