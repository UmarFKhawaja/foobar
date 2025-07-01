import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { AlignType, GapSize, JustifyType } from '../../types';
import { HStackStyles } from './types';

export interface HStackProps extends PropsWithChildren<ViewProps> {
  classNames?: HStackStyles;
  gap?: GapSize;
  justify?: JustifyType;
  align?: AlignType;
}
