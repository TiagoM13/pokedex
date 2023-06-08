import React from 'react';

import { IInfoBox } from '@interfaces';

export const InfoBox = ({ title, icon, component }: IInfoBox) => {
  return (
    <div className="w-full px-2">
      <h3 className="mb-1 flex items-center justify-center gap-2 text-sm font-semibold uppercase text-zinc-600 screen-xs:text-xs">
        {icon}
        {title}
      </h3>
      {component}
    </div>
  );
};
