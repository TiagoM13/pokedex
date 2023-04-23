import React from 'react';

import { TypeCard } from '@components/TypeCard/TypeCard';
import { IPokemonCard } from '@interfaces/pokemonCard';
import { getNumberOrderFormat } from '@utils/getNumberOrderFormat';
import {
  getTypesToBackgroundColor,
  getTypesToIconsTypes,
} from '@utils/getTheme';

export const PokemonCard = ({
  name,
  id,
  types,
  url_img,
  getSelectedPokemon,
}: IPokemonCard) => {
  return (
    <li>
      <button
        type="button"
        title={`Pokémon - ${name.toUpperCase()}`}
        onClick={() => getSelectedPokemon(id)}
        style={{
          backgroundColor: types[0].type.name
            ? getTypesToBackgroundColor(types[0].type.name.toUpperCase())
            : '#9d9b9b',
        }}
        className="w-full h-[160px] flex justify-between rounded-3xl p-2 my-1 text-white duration-500 hover:shadow-md hover:shadow-slate-400 hover:brightness-100 hover:-translate-y-1 animate-reveal"
      >
        <div className="py-4 px-1">
          <div className="flex flex-col items-start">
            <h3 className="font-black line-clamp-1 text-sm capitalize">
              {name}
            </h3>
            <span className="font-semibold text-xs text-left">
              {getNumberOrderFormat(id)}
            </span>
          </div>
          <div className="pt-2 font-semibold text-[10px]">
            {types.map((type) => {
              return (
                <TypeCard
                  key={type.type.name}
                  icon={`${
                    type.type.name &&
                    getTypesToIconsTypes(type.type.name.toUpperCase())
                  }`}
                  type={type.type.name}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center h-full w-full">
          <img
            className="w-full object-cotain overflow-hidden"
            src={url_img}
            alt={`Pokémon - ${name}`}
            loading="lazy"
          />
        </div>
      </button>
    </li>
  );
};
