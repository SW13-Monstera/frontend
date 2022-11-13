import { COLOR } from '../../../constants/color';
import { OIcon } from '../../../Icon/OIcon';
import { PolygonIcon } from '../../../Icon/PolygonIcon';
import { XIcon } from '../../../Icon/XIcon';
import { IMypageProblem } from '../../../types/problem';
import { ProblemTitleBox } from '../ProblemTitleBox';
import {
  problemListByTypeStyle,
  problemListInnerWrapperStyle,
  problemListTitleNumberStyle,
  problemListTitleStyle,
  problemListTitleTextStyle,
  problemListWrapperStyle,
} from './style.css';

interface IProblemListBox {
  problems: IMypageProblem[];
  type: 'correct' | 'wrong' | 'partial';
}

const PROBLEM_TITLE = {
  correct: '맞은 문제',
  wrong: '틀린 문제',
  partial: '부분 점수',
};

export const ProblemListBox = ({ problems, type }: IProblemListBox) => {
  return (
    <div className={problemListWrapperStyle}>
      <div className={problemListTitleStyle}>
        {type === 'correct' ? (
          <OIcon fill={COLOR.GREEN} width='1.5rem' height='1.5rem' />
        ) : type === 'wrong' ? (
          <XIcon fill={COLOR.RED} width='1.5rem' height='1.5rem' />
        ) : (
          <PolygonIcon fill={COLOR.ORANGE} width='1.5rem' height='1.5rem'></PolygonIcon>
        )}

        <div className={problemListTitleTextStyle}>{PROBLEM_TITLE[type]}</div>
        <div className={problemListTitleNumberStyle}>{problems.length}개</div>
      </div>
      <div className={problemListInnerWrapperStyle}>
        {['long', 'short', 'multiple'].map((type) => (
          <ul className={problemListByTypeStyle} key={type}>
            {problems
              .filter((e) => e.type === type)
              .map((e) => (
                <li key={e.id}>
                  <ProblemTitleBox id={e.id} title={e.title} type={e.type} />
                </li>
              ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
