import { IPokemons } from '.';

export type IListPokemons = {
  data: IPokemons[];
  handleSelectedId: (id: number) => void;
};
