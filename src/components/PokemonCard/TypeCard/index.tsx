import React from 'react';

import { ITypeCard } from '../../../interfaces/typeCard';
import { getTypesToColor } from '../../../utils/getColors';

export const TypeCard = ({ type }: ITypeCard) => {
  return (
    <span
      style={{
        backgroundColor: type.toUpperCase()
          ? getTypesToColor(type.toUpperCase())
          : 'bg-black',
      }}
      className="bg-opacity-20 py-1 px-2 mb-1 rounded-lg border border-zinc-100"
    >
      {type.toUpperCase()}
    </span>
  );
};
