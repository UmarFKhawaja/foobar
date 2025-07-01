import { Text } from 'react-native';
import { DEFAULT_TEXT_VARIANT } from '../../constants';
import { LabelProps } from './props';
import { useStyles } from './styles';
import { LabelStyles } from './types';

export function Label({ className, classNames, variant: textVariant = DEFAULT_TEXT_VARIANT, children, ...props }: LabelProps) {
  const styles: LabelStyles = useStyles(textVariant, className, classNames);

  return (
    <Text className={styles.root} {...props}>
      {children}
    </Text>
  );
}
