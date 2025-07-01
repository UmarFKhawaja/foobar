import clsx from 'clsx';
import { mapGapSize } from '../../methods';
import { AlignType, GapSize, JustifyType } from '../../types';
import { HStackStyles } from './types';

export function useStyles(gapSize: GapSize, justifyType: JustifyType, alignType: AlignType, className?: string, classNames?: HStackStyles): HStackStyles {
  const root: string = clsx(`flex flex-row justify-${justifyType} items-${alignType} gap-${mapGapSize(gapSize)}`, className, classNames?.root);

  return {
    root
  };
}
