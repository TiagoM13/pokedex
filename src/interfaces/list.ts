import { IPokemons } from '@interfaces/pokemons';

export type IListPokemons = {
  data: IPokemons[];
  handleSelectedId: (id: number) => void;
};
