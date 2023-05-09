import React from 'react';

import { IInfoBox } from '@interfaces';

export const InfoBox = ({ title, icon, component }: IInfoBox) => {
  return (
    <div className="w-full px-2">
      <h3 className="flex items-center justify-center text-sm font-semibold text-zinc-600 gap-2 mb-1 uppercase screen-xs:text-xs">
        {icon}
        {title}
      </h3>
      {component}
    </div>
  );
};
