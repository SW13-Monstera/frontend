export interface IButton {
  text: string;
  type: TButtonType;
  theme: TButtonTheme;
}

export const BUTTON_TYPE = { SUBMIT: 'submit', BUTTON: 'button', RESET: 'reset' } as const;

export type TButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];

export const BUTTON_THEME = { PRIMARY: 'primary', SECONDARY: 'secondary' };

export type TButtonTheme = typeof BUTTON_THEME[keyof typeof BUTTON_THEME];
