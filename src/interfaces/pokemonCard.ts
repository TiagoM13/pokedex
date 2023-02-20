export interface IPokemonCard {
  id: number;
  name: string;
  url_img: string;
  types: {
    type_1: string;
    type_2?: string;
  };
  abilities: {
    ability_1: string;
    ability_2: string;
  };
}
