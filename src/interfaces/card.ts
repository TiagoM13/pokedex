export interface IPokemonCard {
  order: number;
  name: string;
  url_img: string;
  types: {
    type_1: string;
    type_2?: string;
  };
  skills: {
    skill_1: string;
    skill_2: string;
  };
}
