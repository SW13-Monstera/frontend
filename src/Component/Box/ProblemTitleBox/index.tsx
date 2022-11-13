import { Link } from 'react-router-dom';
import { PROBLEM_TYPE } from '../../../constants/problem';
import { URLWithParam } from '../../../constants/url';
import { problemTitleBoxStyle, textStyle } from './style.css';

interface IProblemTitleBox {
  id: number;
  title: string;
  type: 'long' | 'short' | 'multiple';
}

export const ProblemTitleBox = ({ id, title, type }: IProblemTitleBox) => {
  const url =
    type === PROBLEM_TYPE.LONG
      ? URLWithParam.LONG_PROBLEM_DETAIL(id)
      : type === PROBLEM_TYPE.SHORT
      ? URLWithParam.SHORT_PROBLEM_DETAIL(id)
      : URLWithParam.MULTIPLE_PROBLEM_DETAIL(id);
  return (
    <Link to={url}>
      <div className={problemTitleBoxStyle[type]}>
        <span className={textStyle}>{title}</span>
      </div>
    </Link>
  );
};
