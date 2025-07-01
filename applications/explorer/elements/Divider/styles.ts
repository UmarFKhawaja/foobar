import clsx from 'clsx';
import { mapGapSize } from '../../methods';
import { GapSize } from '../../types';
import { DividerStyles } from './types';

export function useStyles(gapSize: GapSize, className?: string, classNames?: DividerStyles): DividerStyles {
  const root: string = clsx(`w-${mapGapSize(gapSize)}`, classNames?.root, className);

  return {
    root
  };
}
