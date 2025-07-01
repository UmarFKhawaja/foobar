import clsx from 'clsx';
import { mapGapSize } from '../../methods';
import { AlignType, GapSize, JustifyType } from '../../types';
import { VStackStyles } from './types';

export function useStyles(gapSize: GapSize, justifyType: JustifyType, alignType: AlignType, className?: string, classNames?: VStackStyles): VStackStyles {
  const root: string = clsx(`flex flex-col justify-${justifyType} items-${alignType} gap-${mapGapSize(gapSize)}`, className, classNames?.root);

  return {
    root
  };
}
