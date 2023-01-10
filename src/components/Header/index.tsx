import React from 'react';

import Pokebola from '../../assets/logo/logo_pokebola.png';

export const Header: React.FC = () => {
  const title = 'Pokedex List';

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
          <h1 className="text-[#fcefd4] underline font-bold text-3xl text-center">
            {title}
          </h1>
        </div>
        <div>
          <input
            name="Search"
            type="text"
            placeholder="Escolha um pokémon..."
            className="placeholder:italic placeholder:text-slate-400 border border-slate-300 bg-zinc-100 rounded-md mx-1 py-1 px-2 shadow-sm focus:outline-none focus:border-zinc-500 focus:ring-1"
          />
          <button
            type="submit"
            className="bg-white p-2 m-1 font-semibold hover:bg-zinc-200 transition-all text-sm rounded-md"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </header>
  );
};
