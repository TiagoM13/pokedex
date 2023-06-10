import React from 'react';

import Logo from '@assets/logo/pokemon-logo.svg';

import { SocialMedia } from '..';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 flex w-full items-center justify-center bg-orange px-6 pt-6 pb-2 text-white">
      <div className="flex flex-col items-center">
        <div>
          <img src={Logo} alt="Logo pokemon" className="m-2 w-[250px]" />
        </div>

        <div className="mt-4 mb-2">
          <SocialMedia />
        </div>

        <p className="my-2 text-xs">Powered by Tiago Mota Ribeiro</p>
      </div>
    </footer>
  );
};
