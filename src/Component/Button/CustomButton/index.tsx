import { ICustomButton } from '../../../types/button';

export const CustomButton = ({ onClick, children, type, className }: ICustomButton) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
