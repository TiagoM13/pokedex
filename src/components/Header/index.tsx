import React from 'react';

export const Header: React.FC = () => {
  const title = 'Pokedex List';

  return (
    <div>
      <h1 className="text-zinc-800 font-bold text-3xl text-center">{title}</h1>
    </div>
  );
};
