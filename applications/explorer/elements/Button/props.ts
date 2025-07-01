import { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonSize, ButtonType, ButtonVariant } from '../../types';
import { ButtonStyles } from './types';

export interface ButtonProps extends PropsWithChildren<Omit<TouchableOpacityProps, 'children'>> {
  classNames?: ButtonStyles;
  children: string;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
}
