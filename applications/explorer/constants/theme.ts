import { Theme } from '../types';

export const THEME: Theme = {
  input: {
    base: 'border border-gray-300 rounded-md px-4 py-2 text-base',
    focused: 'border-blue-500',
    errored: 'border-red-500 text-red-600'
  },
  spacing: {
    none: 'p-0',
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
  },
  border: {
    base: 'border border-gray-200',
    thick: 'border-2 border-gray-300',
    rounded: 'rounded-md',
    circle: 'rounded-full'
  },
  layout: {
    row: 'flex flex-row items-center',
    column: 'flex flex-col',
    center: 'justify-center items-center',
    between: 'justify-between items-center'
  },
  icon: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8'
    }
  }
};
