import { IPokemons } from './pokemons';

export type ListProps = {
  data: IPokemons[];
  handleSelectedId: (id: number) => void;
};
