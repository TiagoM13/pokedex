/* eslint-disable prettier/prettier */
import React from 'react';

import { TypeCard, ImageLazyLoader } from '@components';
import { useSelectedPokemonContext } from '@hooks';
import { IPokemonCard } from '@interfaces';
import {
  getNumberOrderFormat,
  getTypesToIconsTypes,
  getTypesToBackgroundColor,
} from '@utils';

export const PokemonCard = ({
  pokemon
}: IPokemonCard) => {
  const { handleSelectPokemon } = useSelectedPokemonContext();

  return (
    <li className="w-full">
      <button
        type="button"
        title={`Pokémon - ${pokemon.data.name.toUpperCase()}`}
        onClick={() => handleSelectPokemon(pokemon.data.id)}
        style={{
          backgroundColor: pokemon.data.types[0].type.name
            ? getTypesToBackgroundColor(pokemon.data.types[0].type.name.toUpperCase())
            : '#9d9b9b',
        }}
        className="w-full h-[160px] flex justify-between rounded-3xl p-2 my-1 text-white duration-500 hover:shadow-md hover:shadow-slate-400 hover:brightness-100 hover:-translate-y-1 animate-reveal screen-3x:h-[200px]"
      >
        <div className="py-4 px-1">
          <div className="flex flex-col items-start">
            <h3 className="font-black line-clamp-1 text-sm capitalize screen-2x:text-xl">
              {pokemon.data.name}
            </h3>
            <span className="font-semibold text-xs text-left screen-2x:text-lg">
              {getNumberOrderFormat(pokemon.data.id)}
            </span>
          </div>
          <div className="pt-2 font-semibold text-[10px] screen-2x:text-sm">
            {pokemon.data.types.map((type) => {
              return (
                <TypeCard
                  key={type.type.name}
                  icon={`${type.type.name &&
                    getTypesToIconsTypes(type.type.name.toUpperCase())
                    }`}
                  type={type.type.name}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center h-full w-full screen-2x:w-auto">
          <ImageLazyLoader imageUrl={pokemon.data.sprites.other['official-artwork'].front_default} name={pokemon.data.name} />
        </div>
      </button>
    </li>
  );
};
