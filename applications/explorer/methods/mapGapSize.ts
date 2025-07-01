import { GapSize } from '../types';

const GAP_SIZES: Record<GapSize, number> = {
  none: 0,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 16
};

export function mapGapSize(gapSize: GapSize): number {
  return GAP_SIZES[gapSize];
}
