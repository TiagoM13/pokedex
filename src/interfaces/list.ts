import { IPokemons } from '@interfaces/pokemons';

export type ListProps = {
  data: IPokemons[];
  handleSelectedId: (id: number) => void;
};
