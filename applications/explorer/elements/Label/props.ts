import { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';
import { TextVariant } from '../../types';
import { LabelStyles } from './types';

export interface LabelProps extends PropsWithChildren<TextProps> {
  classNames?: LabelStyles;
  variant?: TextVariant;
}
