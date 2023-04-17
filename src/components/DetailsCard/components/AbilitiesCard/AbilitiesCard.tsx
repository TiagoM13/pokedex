import React from 'react';
import { CgPokemon } from 'react-icons/cg';

import { IAbilitiesCard } from '@interfaces/abilitiesCard';

export const AbilitiesCard = ({ abilities }: IAbilitiesCard) => {
  return (
    <div className="flex flex-col justify-center items-center pt-2 px-4">
      <h3 className="flex items-center text-sm font-semibold text-zinc-500 gap-2 mb-1 uppercase">
        <CgPokemon size={20} className="text-zinc-500" />
        Abilities
      </h3>

      <div className="flex gap-2">
        {abilities?.map((ability, index) => {
          return (
            <div key={`${ability.ability.name}-${index}`}>
              <div className="text-center border border-zinc-300 rounded-lg py-2 px-3">
                <span className="text-base capitalize">
                  {ability.ability.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
