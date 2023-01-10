import React from 'react';

import { getTypesToColor } from '../../../utils/getTypesToColor';

type TypeCardProps = {
  type: string;
};

export const TypeCard = ({ type }: TypeCardProps) => {
  return (
    <span
      style={{
        backgroundColor: type ? getTypesToColor(type) : 'bg-black',
      }}
      className="bg-opacity-20 py-1 px-2 mb-1 rounded-lg border border-zinc-100"
    >
      {type}
    </span>
  );
};
