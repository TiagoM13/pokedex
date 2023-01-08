/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

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
    <li className="w-[260px] flex justify-between rounded-3xl p-2 m-4 text-zinc-300 bg-red-500 hover:bg-red-600 duration-500 hover:shadow-md hover:shadow-slate-400">
      <div className="py-2 px-1">
        <div className="flex flex-col">
          <h3 className="font-black">{name}</h3>
          <span className="font-semibold text-sm">#00{order}</span>
        </div>
        <div className="flex flex-col max-w-fit pt-2 font-semibold text-xs text-center">
          <span className="bg-black bg-opacity-20 py-2 px-4 mb-1 rounded-lg">
            {types.type_1}
          </span>
          <span className="bg-black bg-opacity-20 py-2 px-4 mb-1 rounded-lg">
            {types.type_2}
          </span>
        </div>
      </div>
      <div>
        <img
          className="w-[130px] h-[130px]"
          src={url_img}
          alt={`Pokémon - ${name}`}
          loading="lazy"
        />
      </div>
    </li>
  );
};
