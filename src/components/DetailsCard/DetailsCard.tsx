import React from 'react';

import { ICardDatails } from '@interfaces';
import {
  getNumberOrderFormat,
  getTypesToBackgroundColor,
  getTypesToIconsTypes,
} from '@utils';

import { BaseStats, InfoCard, Tab } from './components';

import { TypeCard } from '..';

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
    <div className="bg-white w-[400px] mx-auto rounded-2xl border border-zinc-300 overflow-hidden  screen-1x:max-w-full">
      {/* image pokémon */}
      <div
        style={{
          backgroundColor: id
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
        <strong className="text-2xl font-medium leading-tight capitalize screen-xs:text-[22px]">
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
        <Tab
          title="Info"
          isActive={select === 'open'}
          status="open"
          onClick={() => setSelect('open')}
        />
        <Tab
          title="Stats"
          isActive={select === 'closed'}
          status="closed"
          onClick={() => setSelect('closed')}
        />
      </div>

      {/* navigation screens */}
      {select === 'open' ? (
        <InfoCard
          info={{
            height,
            weight,
            abilities,
          }}
        />
      ) : (
        <BaseStats stats={stats} />
      )}
    </div>
  );
};
