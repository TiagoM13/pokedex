export interface Pokemons {
  data: {
    name: string;
    order: string;
    sprites: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
    };
    types: [];
    abilities: [];
  };
}
