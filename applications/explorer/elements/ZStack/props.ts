import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { AnchorType, GapSize } from '../../types';
import { ZStackStyles } from './types';

export interface ZStackProps extends PropsWithChildren<ViewProps> {
  classNames?: ZStackStyles;
  gap?: GapSize;
  anchor?: AnchorType;
}
