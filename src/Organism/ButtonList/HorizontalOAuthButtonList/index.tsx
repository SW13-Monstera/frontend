import HorizontalLineTitle from '../../HorizontalLineTitle';
import OAuthButtonList from '../OAuthButtonList';
import { oauthJoinStyle, oauthJoinWrapperStyle } from './style.css';

interface IHorizontalOAuthButtonList {
  children: string;
}

function HorizontalOAuthButtonList({ children }: IHorizontalOAuthButtonList) {
  return (
    <div className={oauthJoinWrapperStyle}>
      <div className={oauthJoinStyle}>
        <HorizontalLineTitle>{children}</HorizontalLineTitle>
      </div>
      <OAuthButtonList />
    </div>
  );
}
export default HorizontalOAuthButtonList;
