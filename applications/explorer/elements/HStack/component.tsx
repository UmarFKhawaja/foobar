import { View } from 'react-native';
import { DEFAULT_ALIGN_TYPE, DEFAULT_GAP_SIZE, DEFAULT_JUSTIFY_TYPE } from '../../constants';
import { HStackProps } from './props';
import { HStackStyles } from './types';
import { useStyles } from './styles';

export function HStack({
  className,
  classNames,
  gap: gapSize = DEFAULT_GAP_SIZE,
  justify: justifyType = DEFAULT_JUSTIFY_TYPE,
  align: alignType = DEFAULT_ALIGN_TYPE,
  children,
  ...props
}: HStackProps) {
  const styles: HStackStyles = useStyles(gapSize, justifyType, alignType, className, classNames);

  return (
    <View className={styles.root} {...props}>
      {children}
    </View>
  );
}
