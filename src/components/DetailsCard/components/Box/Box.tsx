import React from 'react';

type BoxProps = {
  text: string | number;
};

export const Box = ({ text }: BoxProps) => {
  return (
    <div className="text-center border border-zinc-300 rounded-lg py-2 px-3 mb-2">
      <span className="text-base font-medium capitalize screen-xs:text-xs">
        {text}
      </span>
    </div>
  );
};
