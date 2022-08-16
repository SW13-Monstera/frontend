import { Divider } from '../../Component/Divider';

interface IHorizontalLineTitle {
  children: JSX.Element | string;
}

function HorizontalLineTitle({ children }: IHorizontalLineTitle) {
  return (
    <>
      <Divider />
      <p>{children}</p>
      <Divider />
    </>
  );
}
export default HorizontalLineTitle;
