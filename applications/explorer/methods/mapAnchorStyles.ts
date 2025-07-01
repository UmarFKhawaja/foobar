import { AnchorType } from '../types';

export function mapAnchorStyles(anchorType: AnchorType, size: number): string {
  switch (anchorType) {
    case 'all':
      return `inset-${size}`;

    case 'horizontal':
      return `left-${size} right-${size}`;

    case 'vertical':
      return `top-${size} bottom-${size}`;

    case 'top':
      return `top-${size} left-${size} right-${size}`;

    case 'bottom':
      return `bottom-${size} left-${size} right-${size}`;

    case 'left':
      return `top-${size} bottom-${size} left-${size}`;

    case 'right':
      return `top-${size} bottom-${size} right-${size}`;

    case 'top-left':
      return `top-${size} left-${size}`;

    case 'top-right':
      return `top-${size} right-${size}`;

    case 'bottom-left':
      return `bottom-${size} left-${size}`;

    case 'bottom-right':
      return `bottom-${size} right-${size}`;

    default:
      return `inset-${size}`;
  }
}
