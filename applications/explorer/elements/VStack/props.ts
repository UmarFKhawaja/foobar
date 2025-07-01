import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { AlignType, GapSize, JustifyType } from '../../types';
import { VStackStyles } from './types';

export interface VStackProps extends PropsWithChildren<ViewProps> {
  classNames?: VStackStyles;
  gap?: GapSize;
  justify?: JustifyType;
  align?: AlignType;
}
