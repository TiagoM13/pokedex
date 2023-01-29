import React from 'react';

import { ITypeCard } from '../../../interfaces/typeCard';
import { getTypesToColor } from '../../../utils/getTheme';

export const TypeCard = ({ type, icon }: ITypeCard) => {
  return (
    <div
      style={{
        backgroundColor: type.toUpperCase()
          ? getTypesToColor(type.toUpperCase())
          : 'bg-black',
      }}
      className="flex justify-between items-center w-max py-1 px-2 mb-1 rounded-lg border border-zinc-100"
    >
      <img
        src={icon}
        alt={`Type ${type}`}
        width="12px"
        className="mr-1"
        loading="lazy"
      />
      <span>{type.toUpperCase()}</span>
    </div>
  );
};
