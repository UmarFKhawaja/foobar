import { Children, cloneElement, isValidElement } from 'react';
import { View } from 'react-native';
import clsx from 'clsx';
import { DEFAULT_ANCHOR_TYPE, DEFAULT_GAP_SIZE } from '../../constants';
import { ZStackProps } from './props';
import { ZStackStyles } from './types';
import { useStyles } from './styles';

export function ZStack({ className, classNames, gap: gapSize = DEFAULT_GAP_SIZE, anchor: anchorType = DEFAULT_ANCHOR_TYPE, children, ...props }: ZStackProps) {
  const styles: ZStackStyles = useStyles(gapSize, anchorType, className, classNames);

  children = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        // @ts-expect-error className will exist on the child
        className: clsx(styles.child, child.props.className)
      });
    }

    return child;
  });

  return (
    <View className={styles.root} {...props}>
      {children}
    </View>
  );
}
