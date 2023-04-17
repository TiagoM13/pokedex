import React from 'react';

import { IInfoBox } from '@interfaces/infoBox';
import { formatHeightWeight } from '@utils/formatHeightWeight';

export const InfoBox = ({ text, value, icon, unity }: IInfoBox) => {
  return (
    <div className="w-full px-2">
      <h3 className="flex items-center text-sm font-semibold text-zinc-500 gap-2 mb-1 uppercase">
        {icon}
        {text}:
      </h3>
      <div className="text-center border border-zinc-300 rounded-lg py-2 px-3">
        <span className="text-base font-medium">
          {formatHeightWeight(value)}
          {unity}
        </span>
      </div>
    </div>
  );
};
