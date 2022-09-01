import { ProfileBox } from '../../Organism/ProfileBox';
import { PageTemplate } from '../../Template';
import { pageWrapperStyle } from './style.css';

export const MyPage = () => {
  return (
    <PageTemplate>
      <div className={pageWrapperStyle}>
        <ProfileBox />
        <div></div>
      </div>
    </PageTemplate>
  );
};
