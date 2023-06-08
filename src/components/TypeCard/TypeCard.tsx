import React from 'react';

import { ITypeCard } from '@interfaces';
import { getTypesToColor } from '@utils';

export const TypeCard = ({ type, icon }: ITypeCard) => {
  return (
    <div
      style={{ backgroundColor: type && getTypesToColor(type.toUpperCase()) }}
      className="mb-1 flex w-max items-center justify-between rounded-lg border border-zinc-100 py-1 px-2"
    >
      <img src={icon} alt={`Type ${type}`} width="12px" className="mr-1" />
      <span>{type.toUpperCase()}</span>
    </div>
  );
};
