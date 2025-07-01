import { View } from 'react-native';
import { DEFAULT_GAP_SIZE } from '../../constants';
import { DividerProps } from './props';
import { useStyles } from './styles';
import { DividerStyles } from './types';

export function Divider({ className, classNames, gap: gapSize = DEFAULT_GAP_SIZE, ...props }: DividerProps) {
  const styles: DividerStyles = useStyles(gapSize, className, classNames);

  return <View className={styles.root} {...props}/>;
}
