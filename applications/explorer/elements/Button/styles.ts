import clsx from 'clsx';
import { ButtonSize, ButtonType, ButtonVariant } from '../../types';
import { makeColorBodyStyle, makeColorTextStyle, makeDisabledBodyStyle, makeDisabledTextStyle, makePaddingBodyStyle, makePaddingTextStyle } from './methods';
import { ButtonStyles } from './types';

export function useStyles(
  buttonSize: ButtonSize,
  buttonType: ButtonType,
  buttonVariant: ButtonVariant,
  isDisabled: boolean,
  className?: string,
  classNames?: ButtonStyles
): ButtonStyles {
  const root: string = clsx(
    'items-center justify-center',
    makePaddingBodyStyle(buttonSize),
    makeColorBodyStyle(buttonType, buttonVariant),
    makeDisabledBodyStyle(isDisabled),
    className,
    classNames?.root
  );

  const text: string = clsx(
    makeColorTextStyle(buttonType, buttonVariant),
    makePaddingTextStyle(buttonSize),
    makeDisabledTextStyle(isDisabled),
    classNames?.text
  );

  // NOTE : output styles here for debugging purposes
  console.log(root);
  console.log(text);

  return {
    root,
    text
  };
}
