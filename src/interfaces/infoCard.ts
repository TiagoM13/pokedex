export interface IInfoCardProps {
  info: {
    weight: number;
    height: number;
    abilities:
      | {
          ability: {
            name: string;
          };
        }[]
      | undefined;
  };
}
