export interface IPokemonCard {
  id: number;
  name: string;
  url_img: string;
  types: {
    type: {
      name: string;
    };
  }[];
  abilities?: {
    ability: {
      name: string;
    };
  }[];
  stats?: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  getSelectedPokemon: (id: number) => void;
}
