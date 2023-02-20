export interface IPokemons {
  data: {
    id: number;
    name: string;
    sprites: ISprites;
    types: [{ type: { name: string } }, { type: { name: string } }];
    abilities: [{ ability: { name: string } }, { ability: { name: string } }];
    weight: number;
    height: number;
  };
}

interface ISprites {
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_shiny: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
  versions: {
    'generation-v': {
      'black-white': {
        animated: {
          front_default: string;
        };
      };
    };
  };
}
