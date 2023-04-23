export interface InfoCardProps {
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
