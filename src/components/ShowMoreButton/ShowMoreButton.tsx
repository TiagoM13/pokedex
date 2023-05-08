import React from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import { IButtonProps } from '@interfaces/index';

export const ShowMoreButton = ({ loadItems, showMoreItems }: IButtonProps) => {
  return (
    <button
      className="flex gap-2 items-center mx-auto bg-[#fe6613] py-2 px-4 my-4 text-white text-base border-none  rounded-lg hover:brightness-95 hover:scale-105 transition-all disabled:cursor-not-allowed disabled:scale-100 disabled:brightness-100"
      type="button"
      onClick={showMoreItems}
      disabled={loadItems}
    >
      <MdOutlineCatchingPokemon
        size={25}
        className={`text-white ${loadItems && 'animate-loading'}`}
      />
      {loadItems ? 'Loading pokemons...' : 'Show more pokemons'}
    </button>
  );
};
