export interface Theme {
  input: InputTheme;
  spacing: SpacingTheme;
  border: BorderTheme;
  layout: LayoutTheme;
  icon: IconTheme;
}

export interface InputTheme {
  base: string;
  focused: string;
  errored: string;
}

export interface SpacingTheme {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface BorderTheme {
  base: string;
  thick: string;
  rounded: string;
  circle: string;
}

export interface LayoutTheme {
  row: string;
  column: string;
  center: string;
  between: string;
}

export interface IconTheme {
  size: IconSizeTheme;
}

export interface IconSizeTheme {
  sm: string;
  md: string;
  lg: string;
}
