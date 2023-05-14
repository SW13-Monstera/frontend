import { ICustomButton } from '../../../types/button';
import { buttonTagStyle, customButtonWrapperStyle } from './style.css';

export const CustomButton = ({ onClick, children, type, className, tag }: ICustomButton) => {
  return (
    <>
      {tag ? (
        <div className={customButtonWrapperStyle}>
          <div className={buttonTagStyle}>{tag}</div>
          <button type={type} onClick={onClick} className={`${className}`}>
            {children}
          </button>
        </div>
      ) : (
        <button type={type} onClick={onClick} className={`${className}`}>
          {children}
        </button>
      )}
    </>
  );
};
