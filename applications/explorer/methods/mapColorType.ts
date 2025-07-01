import { ColorType, ColorPalette } from '../types';

export const COLOR_PALETTE: ColorPalette = {
  light: {
    theme: {
      primary: 'blue',
      secondary: 'red'
    },
    shade: '500'
  },
  dark: {
    theme: {
      primary: 'blue',
      secondary: 'red'
    },
    shade: '400'
  }
};

export function mapColorType(colorType: ColorType): [string, string] {
  const lightType: string = COLOR_PALETTE.light.theme[colorType];
  const lightShade: string = COLOR_PALETTE.light.shade;
  const darkType: string = COLOR_PALETTE.dark.theme[colorType];
  const darkShade: string = COLOR_PALETTE.dark.shade;

  return [
    `${lightType}-${lightShade}`,
    `${darkType}-${darkShade}`
  ];
}
