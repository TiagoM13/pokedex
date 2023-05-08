import React from 'react';
import { ImStatsBars } from 'react-icons/im';

import { IBaseStats } from '@interfaces/index';

import { ProgressBar } from '..';

export const BaseStats = ({ stats }: IBaseStats) => {
  return (
    <div className="flex flex-col items-center py-4">
      <h3 className="flex items-center text-sm font-semibold text-zinc-600 gap-2 mb-1 uppercase">
        <ImStatsBars size={15} className="text-zinc-600" />
        Base Stats
      </h3>
      {stats?.map((stat, index) => {
        return (
          <div
            key={index}
            className="w-full justify-between items-center flex gap-2 px-4 text-zinc-700"
          >
            <div className="w-[200px]">
              <span className="text-sm font-semibold">{stat.stat.name}</span>
            </div>

            {/* progressbar */}
            <ProgressBar amount={stat.base_stat} />

            <div className="w-11 text-right">
              <span className="text-sm font-semibold">{stat.base_stat}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
