import React from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

export const Loading = () => {
  return (
    <div className="flex justify-center">
      <h3 className="text-2xl text-center font-bold flex items-center gap-2">
        <MdOutlineCatchingPokemon
          size={35}
          className="text-red-600 animate-loading"
        />
        Loading pokemon list...
      </h3>
    </div>
  );
};
