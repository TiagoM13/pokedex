export interface Pokemons {
  data: {
    id: number;
    name: string;
    order: number;
    sprites: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
    };
    types: [{ type: { name: string } }, { type: { name: string } }];
    abilities: [{ ability: { name: string } }, { ability: { name: string } }];
    weight: number;
    height: number;
  };
}
