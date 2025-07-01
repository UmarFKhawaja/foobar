import clsx from 'clsx';
import { mapTextVariant } from '../../methods';
import { TextVariant } from '../../types';
import { LabelStyles } from './types';

export function useStyles(textVariant: TextVariant, className?: string, classNames?: LabelStyles): LabelStyles {
  const root: string = clsx(mapTextVariant(textVariant), className, classNames?.root);

  return {
    root
  };
}
