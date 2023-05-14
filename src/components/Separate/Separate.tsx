import React from 'react';
import { MdCatchingPokemon } from 'react-icons/md';

type SeparateProps = {
  loading: boolean;
  amount: number;
};

export const Separate = ({ loading, amount }: SeparateProps) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        if (count >= amount) {
          clearInterval(timer);

          return amount;
        }

        return count + 1;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [amount]);

  return (
    <div className="w-full border-t border-t-zinc-300 px-8 pt-4 mt-10 flex items-center gap-2">
      <MdCatchingPokemon size={25} color="red" />
      <p className="text-xl font-semibold">
        <span>{loading ? 0 : count} </span>
        {count <= 1 ? 'Pokémon' : 'Pokémons'}
      </p>
    </div>
  );
};
