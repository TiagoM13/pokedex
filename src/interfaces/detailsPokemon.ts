import { ISprites } from '.';

export interface IDetailsPokemon {
  id: number;
  name: string;
  sprites: ISprites;
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
}
