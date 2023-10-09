import { MouseEventHandler } from 'react';

export interface IButton {
  children: React.ReactNode;
  type?: TButtonType;
  theme?: TButtonTheme;
  size?: TButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export interface IButtonDetail extends IButton {
  theme: TButtonTheme;
  size: TButtonSize;
  isActivated?: boolean;
}

export const BUTTON_TYPE = { SUBMIT: 'submit', BUTTON: 'button', RESET: 'reset' } as const;

export type TButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export const BUTTON_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

export type TButtonTheme = (typeof BUTTON_THEME)[keyof typeof BUTTON_THEME];

export const BUTTON_SIZE = {
  LARGE: 'large',
  LARGE_MEDIUM: 'largeMedium',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type TButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];

export interface ICustomButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: TButtonType;
  children?: React.ReactNode;
  className?: string;
  tag?: string;
}
