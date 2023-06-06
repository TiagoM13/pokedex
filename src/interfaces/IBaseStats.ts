export interface IBaseStats {
  stats:
    | {
        base_stat: number;
        effort: number;
        stat: {
          name: string;
        };
      }[]
    | undefined;
}
