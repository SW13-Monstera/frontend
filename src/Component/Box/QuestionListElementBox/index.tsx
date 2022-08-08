import { Link, Outlet } from 'react-router-dom';
import TagBox from '../TagBox';
import { IProblem } from '../../../types/problem';
import { detailWrapperStyle, tagListStyle, textBoxMainStyle, textBoxStyle } from './style.css';
import baseFontStyle from '../../../styles/font.css';
import { URLWithParam } from '../../../constants/url';

function QuestionListElementBox({ title, numberSolved, averageScore, tagList }: IProblem) {
  return (
    <>
      <div className={textBoxStyle}>
        <Link to={URLWithParam.LONG_PROBLEM_DETAIL('1')}>
          <div className={textBoxMainStyle}>
            <p className={baseFontStyle.medium}>{title}</p>
            <ul className={tagListStyle}>
              {tagList.map((tag) => (
                <TagBox name={tag} key={tag} />
              ))}
            </ul>
          </div>
          <div className={detailWrapperStyle}>
            <p className={baseFontStyle.small}>푼 사람 수 : {numberSolved} 명</p>
            <p>평균 점수 : {averageScore} 점</p>
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default QuestionListElementBox;
