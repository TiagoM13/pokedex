import React from 'react';

type BoxProps = {
  text: string | number;
};

export const Box = ({ text }: BoxProps) => {
  return (
    <div className="mb-2 rounded-lg border border-zinc-300 py-2 px-3 text-center">
      <span className="text-base font-medium capitalize screen-xs:text-xs">
        {text}
      </span>
    </div>
  );
};
