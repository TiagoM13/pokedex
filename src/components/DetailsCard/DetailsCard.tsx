import React from 'react';
import { AiOutlineColumnHeight } from 'react-icons/ai';
import { FaWeightHanging } from 'react-icons/fa';

import { TypeCard } from '@components/TypeCard/TypeCard';
import { ICardDatails } from '@interfaces/cardDatails';
import { getNumberOrderFormat } from '@utils/getNumberOrderFormat';
import {
  getTypesToBackgroundColor,
  getTypesToIconsTypes,
} from '@utils/getTheme';

import { AbilitiesCard } from './components/AbilitiesCard/AbilitiesCard';
import { BaseStats } from './components/BaseStats/BaseStats';
import { InfoBox } from './components/InfoBox/InfoBox';
import { Tabs } from './components/Tabs/Tabs';

export const DetailsCard = ({
  id,
  name,
  img,
  types,
  weight,
  height,
  abilities,
  stats,
}: ICardDatails) => {
  const [select, setSelect] = React.useState<'open' | 'closed'>('open');

  return (
    <div className="bg-white w-[400px] mx-auto rounded-2xl border border-zinc-300 overflow-hidden">
      {/* image pokémon */}
      <div
        style={{
          backgroundColor: id!
            ? getTypesToBackgroundColor(types![0].type.name.toUpperCase())
            : '#9d9b9b',
        }}
        className="bg-zinc-500 flex flex-col items-center text-white px-4 py-4 rounded-b-[50%]"
      >
        <div className="w-[240px] flex justify-center -mb-14">
          <img src={img} alt={name} className="w-full" loading="lazy" />
        </div>
      </div>

      {/* name pokémon */}
      <div className="w-full flex flex-col justify-between mt-6 px-4">
        <strong className="text-2xl font-medium leading-tight capitalize">
          {name}
        </strong>
        <span className="text-sm font-semibold text-zinc-500">
          {getNumberOrderFormat(id!)}
        </span>
      </div>

      {/* types pokémon */}
      <div className="flex items-center gap-2 py-2 px-4">
        {types?.map((type, index) => {
          return (
            <div
              key={`${type.type.name}-${index}`}
              className="font-semibold text-white text-[12px]"
            >
              <TypeCard
                type={type.type.name}
                icon={`${
                  type.type.name &&
                  getTypesToIconsTypes(type.type.name.toUpperCase())
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* nav tabs */}
      <div className="flex border-b border-zinc-300 mx-4">
        <Tabs
          title="Info"
          isActive={select === 'open'}
          status="open"
          onClick={() => setSelect('open')}
        />
        <Tabs
          title="Stats"
          isActive={select === 'closed'}
          status="closed"
          onClick={() => setSelect('closed')}
        />
      </div>

      {select === 'open' ? (
        <div className="mb-4">
          {/* info pokémon */}
          <div className="flex items-center justify-between px-4 my-2">
            <InfoBox
              text="Peso"
              value={weight}
              unity="kg"
              icon={<FaWeightHanging size={15} className="text-zinc-500" />}
            />

            <InfoBox
              text="Altura"
              value={height}
              unity="m"
              icon={
                <AiOutlineColumnHeight size={15} className="text-zinc-500" />
              }
            />
          </div>

          {/* abilities */}
          <AbilitiesCard abilities={abilities} />
        </div>
      ) : (
        <BaseStats stats={stats} />
      )}
    </div>
  );
};