import React from 'react';
import { ImStatsBars } from 'react-icons/im';

import { IBaseStats } from '@interfaces';

import { ProgressBar } from '..';

export const BaseStats = ({ stats }: IBaseStats) => {
  return (
    <div className="flex flex-col items-center py-4">
      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase text-zinc-600">
        <ImStatsBars size={15} className="text-zinc-600" />
        Base Stats
      </h3>
      {stats?.map((stat, index) => {
        return (
          <div
            key={index}
            className="flex w-full items-center justify-between gap-2 px-4 text-zinc-700"
          >
            <div className="w-[200px] screen-xs:w-[180px]">
              <span className="text-sm font-semibold screen-xs:text-xs">
                {stat.stat.name}
              </span>
            </div>

            {/* progressbar */}
            <ProgressBar amount={stat.base_stat} />

            <div className="w-11 text-right">
              <span className="text-sm font-semibold screen-xs:text-xs">
                {stat.base_stat}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
