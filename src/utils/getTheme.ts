import { THEME } from '@theme';

export const getTypesToColor = (type?: string) => {
  if (type) {
    for (const [key, color] of Object.entries(THEME.COLORS)) {
      if (type === key) {
        return color;
      }
    }
  }
};

export const getTypesToBackgroundColor = (type?: string) => {
  if (type) {
    for (const [key, background_color] of Object.entries(THEME.BACKGROUND)) {
      if (type === key) {
        return background_color;
      }
    }
  }
};

export const getTypesToIconsTypes = (type?: string) => {
  if (type) {
    for (const [key, icon] of Object.entries(THEME.ICONS)) {
      if (type === key) {
        return icon;
      }
    }
  }
};
