export interface IInputBox {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: JSX.Element | string;
  onChange?: () => void;
  defaultValue?: string;
  isWarning?: boolean;
  warningMessage?: string;
}
