/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import CharizardImg from '../../assets/pokemon_images/pokemon_icon_006_00.png';
import { useGetPokemonsData } from '../../hooks/usePokemons';
import { getPokemonSkills, getTypesPokemons } from '../../utils/pokemonsData';
import { PokemonCard } from '../PokemonCard';

export const ListPokemon: React.FC = () => {
  // const { pokemons } = useGetPokemonsData();

  return (
    <div>
      <ul>
        <PokemonCard
          order={6}
          name="Charizard"
          skills={{ skill_1: 'Soco de Fogo', skill_2: 'Cauda do Dragão' }}
          types={{ type_1: 'Fogo', type_2: 'Voador' }}
          url_img={CharizardImg}
        />
      </ul>
    </div>
  );
};
