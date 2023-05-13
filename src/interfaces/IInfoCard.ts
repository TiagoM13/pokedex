export interface IInfoCard {
  info: {
    weight?: number;
    height?: number;
    abilities:
      | {
          ability: {
            name: string;
          };
        }[]
      | undefined;
  };
}
