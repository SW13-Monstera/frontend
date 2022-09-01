import { Divider } from '../../Component/Divider';
import { horizontalLineTitleStyle, horizontalLineTitleTextStyle } from './style.css';

interface IHorizontalLineTitle {
  children: JSX.Element | string;
}

function HorizontalLineTitle({ children }: IHorizontalLineTitle) {
  return (
    <div className={horizontalLineTitleStyle}>
      <Divider />
      <div className={horizontalLineTitleTextStyle}>{children}</div>
      <Divider />
    </div>
  );
}
export default HorizontalLineTitle;
