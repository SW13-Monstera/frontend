import { ChangeEvent } from 'react';
import { IWarningText } from './input';

export interface IInputBox {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  isWarning?: boolean;
  warningMessages?: IWarningText[];
  icon?: React.ReactNode;
}
