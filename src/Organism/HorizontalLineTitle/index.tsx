import { horizontalLineStyle } from './style.css';

interface IHorizontalLineTitle {
  children: JSX.Element | string;
}

function HorizontalLineTitle({ children }: IHorizontalLineTitle) {
  return (
    <>
      <div className={horizontalLineStyle} />
      <p>{children}</p>
      <div className={horizontalLineStyle} />
    </>
  );
}
export default HorizontalLineTitle;
