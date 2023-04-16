export interface IAbilitiesCard {
  abilities:
    | {
        ability: {
          name: string;
        };
      }[]
    | undefined;
}
