import React from 'react';
import { Link } from 'react-router-dom';

import Pikachu from '@assets/img/pikachu-2.png';
import Logo from '@assets/logo/logo.png';
import { ArrowLeft } from 'phosphor-react';

export const Header = () => {
  return (
    <header className="bg-orange pt-4 px-4 h-[310px]">
      <div className="max-w-[1320px] flex justify-between mx-auto">
        <Link
          to="/"
          reloadDocument
          className="text-white font-semibold flex items-center gap-1 mb-8 hover:text-blue-700 transition-all"
        >
          <ArrowLeft weight="bold" />
          Home
        </Link>

        <div className="flex items-center">
          <img
            src={Logo}
            alt="Pokémon"
            title="Pokémon"
            width="120px"
            loading="eager"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <img src={Pikachu} alt="Pokebola" width="350px" className="-mb-11" />
      </div>
    </header>
  );
};
