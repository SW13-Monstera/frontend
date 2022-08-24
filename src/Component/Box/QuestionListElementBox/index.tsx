import { Link, Outlet } from 'react-router-dom';
import TagBox from '../TagBox';
import { IQuestionListElementBox, TProblemType } from '../../../types/problem';
import { detailWrapperStyle, tagListStyle, textBoxMainStyle, textBoxStyle } from './style.css';
import baseFontStyle from '../../../styles/font.css';
import { URLWithParam } from '../../../constants/url';
import { getTagById } from '../../../utils/getTagbyId';

const URLByType: Record<TProblemType, (id: number) => string> = {
  long: (id: number) => URLWithParam.LONG_PROBLEM_DETAIL(id.toString()),
  short: (id: number) => URLWithParam.SHORT_PROBLEM_DETAIL(id.toString()),
  multiple: (id: number) => URLWithParam.MULTIPLE_PROBLEM_DETAIL(id.toString()),
};

function QuestionListElementBox({ title, totalSolved, tags, id, type }: IQuestionListElementBox) {
  return (
    <>
      <Link to={URLByType[type](id)}>
        <div className={textBoxStyle}>
          <div className={textBoxMainStyle}>
            <p className={baseFontStyle.medium}>{title}</p>
            <ul className={tagListStyle}>
              {tags.map((tagId) => {
                const { name, color } = getTagById(tagId);
                return <TagBox name={name} color={color} key={tagId} />;
              })}
            </ul>
          </div>
          <div className={detailWrapperStyle}>
            <p className={baseFontStyle.small}>푼 사람 수 : {totalSolved ?? 0} 명</p>
          </div>
        </div>
      </Link>
      <Outlet />
    </>
  );
}

export default QuestionListElementBox;
