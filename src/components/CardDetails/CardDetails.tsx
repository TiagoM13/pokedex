/* eslint-disable prettier/prettier */
import React from 'react';
import { AiOutlineColumnHeight } from 'react-icons/ai'
import { CgPokemon } from 'react-icons/cg';
import { FaWeightHanging } from 'react-icons/fa'

import { getNumberOrderFormat } from '../../utils/getNumberOrderFormat';
import { getTypesToBackgroundColor, getTypesToIconsTypes } from '../../utils/getTheme';
import { TypeCard } from '../PokemonCard/TypeCard';

interface Props {
  id?: number;
  name?: string;
  img?: string;
  types?: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
}

const formatHeightWeight = (value: number) => {
  const format = value / 10;
  return format;
}

export const CardDetails = ({ id, name, img, types, weight, height, abilities }: Props) => {
  return (
    <div className="bg-white w-[400px] mx-auto rounded-2xl border border-zinc-300 overflow-hidden">
      <div
        className="bg-zinc-500 flex flex-col items-center text-white px-4 py-4 rounded-b-[50%]"
      >
        <div className="w-full flex justify-between mt-2 mb-4 px-4">
          <strong className="text-2xl font-extrabold leading-tight capitalize">
            {name}
          </strong>
          <span className="text-xl font-bold">{getNumberOrderFormat(id!)}</span>
        </div>

        <div className="w-[240px] flex justify-center -mb-14">
          <img src={img} alt="Charizard" className="w-full" loading="lazy" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 pt-8 px-4">
        {types?.map((type, index) => {
          return (
            <div key={`${type.type.name}-${index}`} className="font-semibold text-white text-[14px]">
              <TypeCard
                type={type.type.name}
                icon={`${type.type.name &&
                  getTypesToIconsTypes(type.type.name.toUpperCase())
                  }`}
              />
            </div>
          );
        })}
      </div>


      <div className="flex flex-col justify-center items-center pt-2 px-4">
        <h3 className='flex items-center text-sm gap-2 mb-1 uppercase'>
          <CgPokemon size={20} color='#000' />
          Abilities
        </h3>

        <div className="flex gap-2">
          {abilities?.map((ability, index) => {
            return (
              <div key={`${ability.ability.name}-${index}`}>
                <div className="text-center border border-zinc-300 rounded-lg py-2 px-3">
                  <span className="text-base capitalize">{ability.ability.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 my-2">
        <div className="w-full px-2">
          <h3 className='flex justify-center items-center text-sm gap-2 mb-1 uppercase'>
            <FaWeightHanging size={15} color='#000' />
            {' '}
            Peso:
          </h3>
          <div className="text-center border border-zinc-300 rounded-lg py-2 px-3">
            <span className="text-base">
              {formatHeightWeight(weight)}
              {' '}
              kg
            </span>
          </div>
        </div>

        <div className="w-full px-2">
          <h3 className='flex justify-center items-center text-sm gap-2 mb-1 uppercase'>
            <AiOutlineColumnHeight size={15} color='#000' />
            {' '}
            Altura:
          </h3>
          <div className="text-center border border-zinc-300 rounded-lg py-2 px-3">
            <span className="text-base">
              {formatHeightWeight(height)}
              {' '}
              m
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};