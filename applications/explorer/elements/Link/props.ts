import { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';

export interface LinkProps extends PropsWithChildren<TextProps> {
  href: string;
}
