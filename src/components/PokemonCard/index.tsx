/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { getColorTypes } from '../../utils/getColorTypes';

interface PokemonData {
  order: number;
  name: string;
  url_img: string;
  types: {
    type_1: string;
    type_2?: string;
  };
  skills: {
    skill_1: string;
    skill_2: string;
  };
}

export const PokemonCard = ({
  name,
  order,
  types,
  url_img,
  skills,
}: PokemonData) => {
  return (
    <li
      className={`w-[200px] h-[160px] flex justify-between items-center rounded-3xl p-2 m-1 text-white ${types.type_1 ? `bg-[${getColorTypes(types.type_1)}]` : 'bg-zinc-500'} hover:brightness-110 duration-500 hover:shadow-md hover:shadow-slate-400`}
    >
      <div className="py-2 px-1">
        <div className="flex flex-col">
          <h3 className="font-black">{name}</h3>
          <span className="font-semibold text-xs">#00{order}</span>
        </div>
        <div className="flex flex-col max-w-fit pt-2 font-semibold text-xs text-center">
          <span className="bg-black bg-opacity-20 py-1 px-2 mb-1 rounded-lg">
            {types.type_1}
          </span>
          {types.type_2 && (
            <span className="bg-black bg-opacity-20 py-1 px-2 mb-1 rounded-lg">
              {types.type_2}
            </span>
          )}
        </div>
      </div>
      <div className="w-[140px] flex items-center justify-center">
        <img
          className='w-full object-cover m-4'
          src={url_img}
          alt={`Pokémon - ${name} `}
          loading="lazy"
        />
      </div>
    </li>
  );
};
