import { MouseEvent } from 'react';

export interface IButton {
  children: JSX.Element | string;
  type?: TButtonType;
  theme?: TButtonTheme;
  size?: TButtonSize;
  onClick?: (event: MouseEvent) => void;
}

export interface IButtonDetail extends IButton {
  theme: TButtonTheme;
  size: TButtonSize;
}

export const BUTTON_TYPE = { SUBMIT: 'submit', BUTTON: 'button', RESET: 'reset' } as const;

export type TButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];

export const BUTTON_THEME = { PRIMARY: 'primary', SECONDARY: 'secondary' } as const;

export type TButtonTheme = typeof BUTTON_THEME[keyof typeof BUTTON_THEME];

export const BUTTON_SIZE = { LARGE: 'large', MEDIUM: 'medium' } as const;

export type TButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];
