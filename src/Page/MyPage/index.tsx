import { ColorLabel } from '../../Component/Utils/ColorLabel';
import { COLOR } from '../../constants/color';
import { ProfileBox } from '../../Organism/ProfileBox';
import { PageTemplate } from '../../Template';
import { colorLabelListStyle, pageWrapperStyle } from './style.css';

const colorLabelList = [
  { color: COLOR.POINT1, name: '서술형' },
  { color: COLOR.POINT2, name: '단답형' },
  { color: COLOR.POINT3, name: '객관식' },
];

export const MyPage = () => {
  return (
    <PageTemplate>
      <div className={pageWrapperStyle}>
        <ProfileBox />
        <div className={colorLabelListStyle}>
          {colorLabelList.map((e) => (
            <ColorLabel color={e.color} name={e.name} key={e.name} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};
