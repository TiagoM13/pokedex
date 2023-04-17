import React from 'react';

type TabsProps = {
  select: boolean;
  selectTwo: boolean;
  onSelect: () => void;
};

export const Tabs = ({ select, selectTwo, onSelect }: TabsProps) => {
  const buttonSelect = {
    borderBottom: select ? '2px solid #000000' : '',
    color: select ? '#000000' : '',
    fontWeight: select ? 'bold' : '',
  };

  const buttonSelectTwo = {
    borderBottom: selectTwo ? '2px solid #000000' : '',
    color: selectTwo ? '#000000' : '',
    fontWeight: selectTwo ? 'bold' : '',
  };

  return (
    <div className="flex border-b border-zinc-300 mx-4">
      <button
        type="button"
        onClick={onSelect}
        className="h-11 flex flex-1 px-5 items-center justify-center text-sm"
        style={buttonSelect}
      >
        Info
      </button>
      <button
        type="button"
        onClick={onSelect}
        className="h-11 flex flex-1 px-5 items-center justify-center text-sm"
        style={buttonSelectTwo}
      >
        Stats
      </button>
    </div>
  );
};
