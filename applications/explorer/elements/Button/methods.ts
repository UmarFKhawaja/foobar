import { mapButtonSize, mapButtonType, mapColorType } from '../../methods';
import { ButtonSize, ButtonType, ButtonVariant } from '../../types';

// Ensure all color class combinations are discoverable by Tailwind
const colorBodyStyles: Record<ButtonType, Record<ButtonVariant, string>> = {
  primary: {
    filled: `bg-blue-500 dark:bg-blue-400 rounded-md`,
    outlined: `border border-blue-500 dark:border-blue-400 bg-transparent rounded-md`,
    ghosted: `bg-transparent rounded-md`,
  },
  secondary: {
    filled: `bg-gray-500 dark:bg-gray-400 rounded-md`,
    outlined: `border border-gray-500 dark:border-gray-400 bg-transparent rounded-md`,
    ghosted: `bg-transparent rounded-md`,
  },
};

const colorTextStyles: Record<ButtonType, Record<ButtonVariant, string>> = {
  primary: {
    filled: 'text-white dark:text-white',
    outlined: `text-blue-500 dark:text-blue-400`,
    ghosted: `text-blue-500 dark:text-blue-400`,
  },
  secondary: {
    filled: 'text-white dark:text-white',
    outlined: `text-gray-500 dark:text-gray-400`,
    ghosted: `text-gray-500 dark:text-gray-400`,
  },
};

// Ensure all padding class combinations are discoverable by Tailwind
const paddingBodyStyles: Record<ButtonSize, string> = {
  xs: 'px-2 py-1',
  sm: 'px-3 py-2',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
  xl: 'px-8 py-4',
};

const paddingTextStyles: Record<ButtonSize, string> = {
  xs: 'font-semibold text-sm',
  sm: 'font-semibold text-base',
  md: 'font-semibold text-lg',
  lg: 'font-semibold text-xl',
  xl: 'font-semibold text-2xl',
};

const disabledBodyStyles = {
  true: 'opacity-50 cursor-not-allowed',
  false: '',
};

const disabledTextStyles = {
  true: '',
  false: '',
};

export function makeColorBodyStyle(buttonType: ButtonType, buttonVariant: ButtonVariant): string {
  // The following lines are to ensure these utility functions are not tree-shaken,
  // preserving the class strings for Tailwind's static analysis.
  // However, they are not strictly necessary for the logic itself if mapColorType and mapButtonType
  // are guaranteed to be used elsewhere or if we hardcode the color values directly as done above.
  if (process.env.NODE_ENV === 'development') {
    const [lightColorPrimary, darkColorPrimary] = mapColorType(mapButtonType('primary'));
    const [lightColorSecondary, darkColorSecondary] = mapColorType(mapButtonType('secondary'));
    console.log(lightColorPrimary, darkColorPrimary, lightColorSecondary, darkColorSecondary);
  }
  return colorBodyStyles[buttonType]?.[buttonVariant] || '';
}

export function makeColorTextStyle(buttonType: ButtonType, buttonVariant: ButtonVariant): string {
  return colorTextStyles[buttonType]?.[buttonVariant] || '';
}

export function makePaddingBodyStyle(buttonSize: ButtonSize): string {
  // The following lines are to ensure mapButtonSize is not tree-shaken if it contains dynamic logic
  // or mappings that Tailwind might need to see.
  if (process.env.NODE_ENV === 'development') {
    console.log(mapButtonSize('xs'));
    console.log(mapButtonSize('sm'));
    console.log(mapButtonSize('md'));
    console.log(mapButtonSize('lg'));
    console.log(mapButtonSize('xl'));
  }
  return paddingBodyStyles[buttonSize] || '';
}

export function makePaddingTextStyle(buttonSize: ButtonSize): string {
  return paddingTextStyles[buttonSize] || '';
}

export function makeDisabledBodyStyle(isDisabled: boolean): string {
  return disabledBodyStyles[isDisabled ? 'true' : 'false'];
}

export function makeDisabledTextStyle(isDisabled: boolean): string {
  // Currently no specific text styles for disabled state, but keeping the structure
  return disabledTextStyles[isDisabled ? 'true' : 'false'];
}
