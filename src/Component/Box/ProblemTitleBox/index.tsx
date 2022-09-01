import { Link } from 'react-router-dom';
import { COLOR_LABEL_LIST } from '../../../constants/colorLabel';
import { URLWithParam } from '../../../constants/url';
import { problemTitleBoxStyle, textStyle } from './style.css';

interface IProblemTitleBox {
  id: number;
  title: string;
  type: string;
}

export const ProblemTitleBox = ({ id, title, type }: IProblemTitleBox) => {
  const url =
    type === 'long'
      ? URLWithParam.LONG_PROBLEM_DETAIL(id)
      : 'short'
      ? URLWithParam.SHORT_PROBLEM_DETAIL(id)
      : URLWithParam.MULTIPLE_PROBLEM_DETAIL(id);
  return (
    <Link to={url}>
      <div
        style={{ backgroundColor: COLOR_LABEL_LIST.find((e) => e.type === type)?.color }}
        className={problemTitleBoxStyle}
      >
        <span className={textStyle}> {title}</span>
      </div>
    </Link>
  );
};
