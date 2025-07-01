import { ViewProps } from 'react-native';
import { GapSize } from '../../types';
import { DividerStyles } from './types';

export interface DividerProps extends Omit<ViewProps, 'children'> {
  classNames?: DividerStyles;
  gap?: GapSize;
}
