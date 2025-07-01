import clsx from 'clsx';
import { mapGapSize } from '../../methods';
import { GapSize } from '../../types';
import { SpacerStyles } from './types';

export function useStyles(gapSize: GapSize, className?: string, classNames?: SpacerStyles): SpacerStyles {
  const root: string = clsx(`h-${mapGapSize(gapSize)}`, className, classNames?.root);

  return {
    root
  };
}
