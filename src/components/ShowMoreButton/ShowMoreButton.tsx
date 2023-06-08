import React from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import { IShowMoreButton } from '@interfaces';

export const ShowMoreButton = ({
  loadItems,
  showMoreItems,
}: IShowMoreButton) => {
  return (
    <button
      className="mx-auto my-4 flex items-center gap-2 rounded-lg border-none bg-[#fe6613] py-2 px-4 text-base  text-white transition-all hover:scale-105 hover:brightness-95 disabled:scale-100 disabled:cursor-not-allowed disabled:brightness-100"
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
