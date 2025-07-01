import { View } from 'react-native';
import { DEFAULT_GAP_SIZE } from '../../constants';
import { SpacerProps } from './props';
import { useStyles } from './styles';
import { SpacerStyles } from './types';

export function Spacer({ className, classNames, gap: gapSize = DEFAULT_GAP_SIZE, ...props }: SpacerProps) {
  const styles: SpacerStyles = useStyles(gapSize, className, classNames);

  return <View className={styles.root} {...props}/>;
}
