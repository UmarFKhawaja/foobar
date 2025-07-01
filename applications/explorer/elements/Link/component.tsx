import { Linking, Text, TouchableOpacity } from 'react-native';
import clsx from 'clsx';
import { LinkProps } from './props';

export function Link({ href, className, children, ...props }: LinkProps) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(href)}>
      <Text className={clsx('font-semibold text-blue-500 dark:text-blue-400', className)} {...props}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
