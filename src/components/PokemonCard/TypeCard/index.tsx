import React from 'react';

import TypeImage from '../../../assets/types_svg/fire.svg';
import { ITypeCard } from '../../../interfaces/typeCard';
import { getTypesToColor } from '../../../utils/getColors';

export const TypeCard = ({ type }: ITypeCard) => {
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
        src={TypeImage}
        alt="type pokémon"
        width="12px"
        className="mr-1"
        loading="lazy"
      />
      <span>{type.toUpperCase()}</span>
    </div>
  );
};
