import React from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import { usePagination } from '../../hooks/usePagination';
import { useGetPokemonsData } from '../../hooks/usePokemons';
import { ListProps } from '../../interfaces/list';
import { Pokemons } from '../../interfaces/pokemons';
import { getFirstLetterCapitalized } from '../../utils/getFirstLetterCapitalized';
import { Loading } from '../Loading/Loading';
import { PokemonCard } from '../PokemonCard';

export const ListPokemon = ({ data }: ListProps) => {
  const itemsPerPage = 20;
  const { loading } = useGetPokemonsData();
  const { currentItems, showMoreItems, loadItems } = usePagination<Pokemons>({
    data,
    itemsPerPage,
  });

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <Loading title_page="pokemon list" />
        </div>
      ) : (
        <ul className="grid grid-cols-6 gap-1 justify-items-center mt-8">
          {currentItems.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.data.order}
                order={pokemon.data.order}
                name={getFirstLetterCapitalized(pokemon.data.name)}
                abilities={{
                  ability_1: pokemon.data.abilities[0]?.ability.name,
                  ability_2: pokemon.data.abilities[1]?.ability.name,
                }}
                types={{
                  type_1: pokemon.data.types[0].type.name,
                  type_2: pokemon.data.types[1]?.type.name,
                }}
                url_img={pokemon.data.sprites.front_default}
              />
            );
          })}
        </ul>
      )}

      {currentItems.length < data.length && (
        <button
          className="flex gap-2 items-center mx-auto bg-[#fe6613] py-2 px-4 my-4 text-white text-base border-none  rounded-lg hover:brightness-95 hover:scale-105 transition-all disabled:cursor-not-allowed disabled:scale-100 disabled:brightness-100"
          type="button"
          onClick={showMoreItems}
          disabled={loadItems}
        >
          <MdOutlineCatchingPokemon
            size={25}
            className={`text-white ${loadItems && 'animate-loading'}`}
          />
          {loadItems ? 'Loading pokemons...' : 'Show more pokemons'}
        </button>
      )}
    </div>
  );
};
