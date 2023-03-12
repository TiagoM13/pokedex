export interface IPokemonCard {
  id: number;
  name: string;
  url_img: string;
  types: {
    type: {
      name: string;
    };
  }[];
  getSelectedPokemon: (id: number) => void;
}
