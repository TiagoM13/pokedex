import React from 'react';
import { AiOutlineColumnHeight } from 'react-icons/ai';
import { FaWeightHanging } from 'react-icons/fa';

import { AbilitiesCard } from '../AbilitiesCard/AbilitiesCard';
import { InfoBox } from '../InfoBox/InfoBox';

type InfoCardProps = {
  info: {
    weight: number;
    height: number;
    abilities:
      | {
          ability: {
            name: string;
          };
        }[]
      | undefined;
  };
};

export const InfoCard = ({ info }: InfoCardProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between px-4 my-2">
        <InfoBox
          text="Peso"
          value={info.weight}
          unity="kg"
          icon={<FaWeightHanging size={15} className="text-zinc-500" />}
        />

        <InfoBox
          text="Altura"
          value={info.height}
          unity="m"
          icon={<AiOutlineColumnHeight size={15} className="text-zinc-500" />}
        />
      </div>

      <AbilitiesCard abilities={info.abilities} />
    </div>
  );
};
