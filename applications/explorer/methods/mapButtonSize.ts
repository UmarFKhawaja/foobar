import { ButtonSize } from '../types';

const BUTTON_SIZES: Record<ButtonSize, [number, number]> = {
  xs: [2, 1],
  sm: [4, 2],
  md: [8, 4],
  lg: [16, 8],
  xl: [32, 16]
};

export function mapButtonSize(buttonSize: ButtonSize): [number, number] {
  return BUTTON_SIZES[buttonSize];
}
