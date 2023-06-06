export interface ICardDatails {
  id: number;
  name?: string;
  img?: string;
  types?: {
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
  weight: number;
  height: number;
}
