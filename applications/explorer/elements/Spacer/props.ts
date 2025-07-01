import { ViewProps } from 'react-native';
import { GapSize } from '../../types';
import { SpacerStyles } from './types';

export interface SpacerProps extends Omit<ViewProps, 'children'> {
  classNames?: SpacerStyles;
  gap?: GapSize;
}
