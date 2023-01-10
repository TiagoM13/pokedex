/* eslint-disable consistent-return */
import { COLORS } from '../colors/colors';
import { TYPES } from '../types_pokemons/types';

export const getTypesToColor = (type: string) => {
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

  if (type === TYPES.FLYING) {
    return COLORS.FLYING;
  }

  if (type === TYPES.DARK) {
    return COLORS.DARK;
  }

  if (type === TYPES.DRAGON) {
    return COLORS.DRAGON;
  }

  if (type === TYPES.ELECTRIC) {
    return COLORS.ELECTRIC;
  }

  if (type === TYPES.FAIRY) {
    return COLORS.FAIRY;
  }

  if (type === TYPES.FIGHTING) {
    return COLORS.FIGHTING;
  }

  if (type === TYPES.GHOST) {
    return COLORS.GHOST;
  }

  if (type === TYPES.GROUND) {
    return COLORS.GROUND;
  }

  if (type === TYPES.ICE) {
    return COLORS.ICE;
  }

  if (type === TYPES.NORMAL) {
    return COLORS.NORMAL;
  }

  if (type === TYPES.POISON) {
    return COLORS.POISON;
  }

  if (type === TYPES.PSYCHIC) {
    return COLORS.PSYCHIC;
  }

  if (type === TYPES.ROCK) {
    return COLORS.ROCK;
  }

  if (type === TYPES.STEEL) {
    return COLORS.STEEL;
  }
};
