/* eslint-disable prettier/prettier */
import React from 'react';

import { IPokemonCard } from '../../interfaces/card';
import { getNumberOrderFormat } from '../../utils/getNumberOrderFormat';
import {
  getTypesToBackgroundColor,
  getTypesToIconsTypes,
} from '../../utils/getTheme';
import { TypeCard } from './TypeCard';

export const PokemonCard = ({ name, order, types, url_img }: IPokemonCard) => {
  return (
    <li
      style={{
        backgroundColor: types.type_1
          ? getTypesToBackgroundColor(types.type_1.toUpperCase())
          : '#121212',
      }}
      className="w-[200px] h-[160px] flex justify-between rounded-3xl p-2 m-1 text-white duration-500  cursor-pointer hover:shadow-md hover:shadow-slate-400 hover:brightness-100 hover:-translate-y-1 animate-reveal"
    >
      <div className="py-4 px-1">
        <div className="flex flex-col">
          <h3 className="font-black line-clamp-1 text-sm">{name}</h3>
          <span className="font-semibold text-sm">
            {getNumberOrderFormat(order)}
          </span>
        </div>
        <div className="pt-2 font-semibold text-[10px]">
          <TypeCard
            icon={`${types.type_1
              ? getTypesToIconsTypes(types.type_1.toUpperCase())
              : ''
              }`}
            type={types.type_1}
          />
          {types.type_2 && <TypeCard
            icon={`${types.type_2
              ? getTypesToIconsTypes(types.type_2.toUpperCase())
              : ''
              }`}
            type={types.type_2}
          />}
        </div>
      </div>
      <div className="flex items-center">
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
