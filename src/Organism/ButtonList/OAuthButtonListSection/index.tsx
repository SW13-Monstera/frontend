import { Divider } from '../../../Component/Divider';
import OAuthButtonList from '../OAuthButtonList';
import { dividerStyle, oauthJoinTitleStyle, oauthJoinWrapperStyle } from './style.css';

interface IOAuthButtonListSection {
  children: string;
}

function OAuthButtonListSection({ children }: IOAuthButtonListSection) {
  return (
    <div className={oauthJoinWrapperStyle}>
      <Divider className={dividerStyle} />
      <div className={oauthJoinTitleStyle}>{children}</div>
      <OAuthButtonList />
    </div>
  );
}
export default OAuthButtonListSection;
