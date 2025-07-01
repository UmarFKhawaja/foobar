import { mapButtonSize, mapButtonType, mapColorType } from '../../methods';
import { ButtonSize, ButtonType, ButtonVariant } from '../../types';

export function makeColorBodyStyle(buttonType: ButtonType, buttonVariant: ButtonVariant): string {
  const [lightColor, darkColor] = mapColorType(mapButtonType(buttonType));

  switch (buttonVariant) {
    case 'filled':
      return `bg-${lightColor} dark:bg-${darkColor} rounded-md`;

    case 'outlined':
      return `border border-${lightColor} dark:border-${darkColor} bg-transparent rounded-md`;

    case 'ghosted':
      return `bg-transparent rounded-md`;

    default:
      return '';
  }
}

export function makeColorTextStyle(buttonType: ButtonType, buttonVariant: ButtonVariant): string {
  const [lightColor, darkColor] = mapColorType(mapButtonType(buttonType));

  switch (buttonVariant) {
    case 'filled':
      return 'text-white dark:text-white';

    case 'outlined':
      return `text-${lightColor} dark:text-${darkColor}`;

    case 'ghosted':
      return `text-${lightColor} dark:text-${darkColor}`;

    default:
      return '';
  }
}

export function makePaddingBodyStyle(buttonSize: ButtonSize): string {
  const [x, y] = mapButtonSize(buttonSize);

  return `px-${x} py-${y}`;
}

export function makePaddingTextStyle(buttonSize: ButtonSize): string {
  switch (buttonSize) {
    case 'xs':
      return 'font-semibold text-sm';

    case 'sm':
      return 'font-semibold text-base';

    case 'md':
      return 'font-semibold text-lg';

    case 'lg':
      return 'font-semibold text-xl';

    case 'xl':
      return 'font-semibold text-2xl';

    default:
      return '';
  }
}

export function makeDisabledBodyStyle(isDisabled: boolean): string {
  return isDisabled ? `opacity-50 cursor-not-allowed` : '';
}

export function makeDisabledTextStyle(isDisabled: boolean): string {
  return '';
}
