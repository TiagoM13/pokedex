import React from 'react';
import { Link } from 'react-router-dom';

import Pikachu from '@assets/img/pikachu-2.png';
import Logo from '@assets/logo/logo.png';
import { ArrowLeft } from 'phosphor-react';

export const Header = () => {
  return (
    <header className="h-[310px] bg-orange px-4 pt-4">
      <div className="mx-auto flex max-w-[1320px] justify-between">
        <Link
          data-testid="link"
          to="/"
          reloadDocument
          className="mb-8 flex items-center gap-1 font-semibold text-white transition-all hover:text-blue-700"
        >
          <ArrowLeft data-testid="arrow-icon" weight="bold" />
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
        <img src={Pikachu} alt="Pikachu" width="350px" className="-mb-11" />
      </div>
    </header>
  );
};
