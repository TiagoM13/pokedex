import React from 'react';

import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

import Logo from '../../assets/logo/pokemon-logo.svg';
import { Anchor } from '../Anchor/Anchor';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#025fca] w-full px-6 pt-6 pb-2 mt-8 text-white flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div>
          <img src={Logo} alt="Logo pokemon" className="w-[250px] m-2" />
        </div>

        <div className="flex gap-1 mt-4 mb-2">
          <Anchor url="https://github.com/TiagoM13">
            <GithubLogo size={25} weight="bold" color="#FFF" />
          </Anchor>
          <Anchor url="https://www.linkedin.com/in/tiago-mota-4690591a8/">
            <LinkedinLogo size={25} weight="bold" color="#FFF" />
          </Anchor>
          <Anchor url="https://twitter.com/tiago_m13">
            <TwitterLogo size={25} weight="bold" color="#FFF" />
          </Anchor>
        </div>

        <p className="text-xs my-2">Powered by Tiago Mota Ribeiro</p>
      </div>
    </footer>
  );
};
