import React from 'react';
import { AiOutlineColumnHeight } from 'react-icons/ai';
import { CgPokemon } from 'react-icons/cg';
import { FaWeightHanging } from 'react-icons/fa';

import { IInfoCard } from '@interfaces';
import { formatHeightWeight } from '@utils';

import { Box, InfoBox } from '..';

export const InfoCard = ({ info }: IInfoCard) => {
  return (
    <div className="grid grid-cols-2 py-4 px-2">
      <div className="flex flex-1 flex-col items-center border-r border-zinc-300">
        <InfoBox
          title="Weight"
          icon={<FaWeightHanging size={15} className="text-zinc-600" />}
          component={<Box text={`${formatHeightWeight(info.weight)} kg`} />}
        />

        <InfoBox
          title="Height"
          icon={<AiOutlineColumnHeight size={15} className="text-zinc-600" />}
          component={<Box text={`${formatHeightWeight(info.height)} m`} />}
        />
      </div>

      <InfoBox
        title="Abilities"
        icon={<CgPokemon size={20} className="text-zinc-600" />}
        component={
          <>
            {info.abilities?.map((ability, index) => {
              return (
                <Box
                  key={`${ability.ability.name}-${index}`}
                  text={ability.ability.name}
                />
              );
            })}
          </>
        }
      />
    </div>
  );
};
