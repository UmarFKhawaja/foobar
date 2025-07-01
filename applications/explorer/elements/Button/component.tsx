import { Text, TouchableOpacity } from 'react-native';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_TYPE, DEFAULT_BUTTON_VARIANT } from '../../constants';
import { ButtonProps } from './props';
import { useStyles } from './styles';
import { ButtonStyles } from './types';

export function Button({
  className,
  classNames,
  children,
  size: buttonSize = DEFAULT_BUTTON_SIZE,
  type: buttonType = DEFAULT_BUTTON_TYPE,
  variant: buttonVariant = DEFAULT_BUTTON_VARIANT,
  disabled: isDisabled = false,
  onPress: handlePress,
  ...props
}: ButtonProps) {
  const styles: ButtonStyles = useStyles(buttonSize, buttonType, buttonVariant, isDisabled, className, classNames);

  // NOTE : works
  // return (
  //   <TouchableOpacity className="items-center justify-center px-8 py-4 bg-blue-500 dark:bg-blue-400 rounded-md" disabled={isDisabled} onPress={handlePress} {...props}>
  //     <Text className="text-white dark:text-white font-semibold text-lg">{children}</Text>
  //   </TouchableOpacity>
  // );

  // NOTE : doesn't work
  return (
    <TouchableOpacity className={styles.root} disabled={isDisabled} onPress={handlePress} {...props}>
      <Text className={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
