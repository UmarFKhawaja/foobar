import { View } from 'react-native';
import { DEFAULT_ALIGN_TYPE, DEFAULT_GAP_SIZE, DEFAULT_JUSTIFY_TYPE } from '../../constants';
import { VStackProps } from './props';
import { VStackStyles } from './types';
import { useStyles } from './styles';

export function VStack({
  className,
  classNames,
  gap: gapSize = DEFAULT_GAP_SIZE,
  justify: justifyType = DEFAULT_JUSTIFY_TYPE,
  align: alignType = DEFAULT_ALIGN_TYPE,
  children,
  ...props
}: VStackProps) {
  const styles: VStackStyles = useStyles(gapSize, justifyType, alignType, className, classNames);

  return (
    <View className={styles.root} {...props}>
      {children}
    </View>
  );
}
