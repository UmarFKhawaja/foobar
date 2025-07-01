import clsx from 'clsx';
import { calculateAnchorStyles, mapGapSize } from '../../methods';
import { AnchorType, GapSize } from '../../types';
import { ZStackStyles } from './types';

export function useStyles(gapSize: GapSize, anchorType: AnchorType, className?: string, classNames?: ZStackStyles): ZStackStyles {
  const root: string = clsx('relative', className, classNames?.root);

  const child: string = clsx(`absolute ${calculateAnchorStyles(anchorType, mapGapSize(gapSize))}`, classNames?.child);

  return {
    root,
    child
  };
}
