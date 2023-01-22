import React from 'react';

import { IPokemonCard } from '../../interfaces/card';
import { getTypesToBackgroundColor } from '../../utils/getColors';
import { getNumberOrderFormat } from '../../utils/getNumberOrderFormat';
import { TypeCard } from './TypeCard';

export const PokemonCard = ({ name, order, types, url_img }: IPokemonCard) => {
  return (
    <li
      style={{
        backgroundColor: types.type_1.toUpperCase()
          ? getTypesToBackgroundColor(types.type_1.toUpperCase())
          : '#121212',
      }}
      className="w-[200px] h-[160px] flex justify-between items-center rounded-3xl p-2 m-1 text-white duration-500  cursor-pointer hover:shadow-md hover:shadow-slate-400 hover:brightness-100 hover:-translate-y-1"
    >
      <div className="py-2 px-1">
        <div className="flex flex-col">
          <h3 className="font-black line-clamp-1 text-sm">{name}</h3>
          <span className="font-semibold text-sm">
            {getNumberOrderFormat(order)}
          </span>
        </div>
        <div className="flex flex-col max-w-fit pt-2 font-semibold text-xs text-center">
          <TypeCard type={types.type_1} />
          {types.type_2 && <TypeCard type={types.type_2} />}
        </div>
      </div>
      <div className="w-[140px] flex items-center justify-center">
        <img
          className="w-full object-cover"
          src={url_img}
          alt={`Pokémon - ${name}`}
          loading="lazy"
        />
      </div>
    </li>
  );
};
