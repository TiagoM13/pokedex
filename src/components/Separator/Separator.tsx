import React from 'react';
import { MdCatchingPokemon } from 'react-icons/md';

import { usePokemonContext } from '@hooks';

export const Separator = () => {
  const { loading, pokemons } = usePokemonContext();
  const [count, setCount] = React.useState(0);

  const amout = pokemons.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        if (count >= amout) {
          clearInterval(timer);

          return amout;
        }

        return count + 1;
      });
    }, 1);

    return () => clearInterval(timer);
  }, [amout]);

  return (
    <div className="mt-10 w-full border-t border-t-zinc-300 px-8 pt-4">
      <div className="mx-auto flex max-w-[1320px] items-center gap-2">
        <MdCatchingPokemon size={25} color="red" />
        <p className="text-xl font-semibold">
          <span>{loading ? 0 : count} </span>
          {count <= 1 ? 'Pokémon' : 'Pokémons'}
        </p>
      </div>
    </div>
  );
};
