import { TextVariant } from '../types';

// 'text-sm text-gray-500 dark:text-gray-400'

export const TEXT_VARIANTS: Record<TextVariant, string> = {
  heading: 'text-xl font-bold text-gray-900',
  body: 'text-base text-gray-700',
  muted: 'text-sm text-gray-500',
  link: 'text-blue-600 underline'
};

export function mapTextVariant(textVariant: TextVariant): string {
  return TEXT_VARIANTS[textVariant];
}
