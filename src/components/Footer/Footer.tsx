import React from 'react';

import Logo from '@assets/logo/pokemon-logo.svg';
import { SocialMedia } from '@components/SocialMedia/SocialMedia';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fe6613] w-full px-6 pt-6 pb-2 mt-8 text-white flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div>
          <img src={Logo} alt="Logo pokemon" className="w-[250px] m-2" />
        </div>

        <div className="mt-4 mb-2">
          <SocialMedia />
        </div>

        <p className="text-xs my-2">Powered by Tiago Mota Ribeiro</p>
      </div>
    </footer>
  );
};
