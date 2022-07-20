import { IInputBox } from '../../../../types/box';
import DefaultInputBox from '../DefaultInputBox';

function PasswordInputBox({ id, placeholder }: IInputBox) {
  return <DefaultInputBox id={id} placeholder={placeholder} type='password' />;
}
export default PasswordInputBox;
