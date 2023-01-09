/* eslint-disable consistent-return */
import { COLORS, TYPES } from '../database/data';

export const getColorTypes = (type: string) => {
  if (type === TYPES.GRASS) {
    return COLORS.GRASS;
  }

  if (type === TYPES.FIRE) {
    return COLORS.FIRE;
  }

  if (type === TYPES.WATER) {
    return COLORS.WATER;
  }

  if (type === TYPES.BUG) {
    return COLORS.BUG;
  }
};
