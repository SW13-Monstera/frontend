import { IMypageProblem } from '../../../types/problem';
import { ProblemTitleBox } from '../ProblemTitleBox';
import {
  problemListElementsStyle,
  problemListTitleStyle,
  problemListWrapperStyle,
} from './style.css';

interface IProblemListBox {
  title: string;
  problems: IMypageProblem[];
}

export const ProblemListBox = ({ problems, title }: IProblemListBox) => {
  return (
    <div className={problemListWrapperStyle}>
      <div className={problemListTitleStyle}>
        <div>{title}</div>
        <div>{problems.length}개</div>
      </div>
      <ul className={problemListElementsStyle}>
        {problems.map((e) => (
          <li key={e.id}>
            <ProblemTitleBox id={e.id} title={e.title} type={e.type} />
          </li>
        ))}
      </ul>
    </div>
  );
};
