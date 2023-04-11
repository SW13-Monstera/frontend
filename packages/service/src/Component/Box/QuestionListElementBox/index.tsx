import { Link } from 'react-router-dom';
import TagBox from '../TagBox';
import { IQuestionListElementBox, TProblemType } from '../../../types/problem';
import {
  detailLabelStyle,
  detailStyle,
  detailValueStyle,
  detailWrapperStyle,
  dividerStyle,
  problemStatisticsWrapperStyle,
  tagListStyle,
  textBoxMainStyle,
  textBoxStyle,
  titleStyle,
} from './style.css';
import { URLWithParam } from '../../../constants/url';
import { getTagById } from '../../../utils/getTagbyId';
import { Divider } from '../../Divider';
import { formatNumber } from '../../../utils/formatNumber';
import { isNumberNotEmpty } from '../../../utils/isNotEmpty';
import { PROBLEM_TYPE } from '../../../constants/problem';

interface IProblemStatisticsBox {
  label: string;
  value: number;
  unit: string;
}

const URLByType: Record<TProblemType, (id: number) => string> = {
  long: (id: number) => URLWithParam.LONG_PROBLEM_DETAIL(id),
  short: (id: number) => URLWithParam.SHORT_PROBLEM_DETAIL(id),
  multiple: (id: number) => URLWithParam.MULTIPLE_PROBLEM_DETAIL(id),
};

function ProblemStatisticsBox({ label, value, unit }: IProblemStatisticsBox) {
  return (
    <div className={detailWrapperStyle}>
      <div className={detailStyle}>
        <div className={detailLabelStyle}>{label}</div>
        <div className={detailValueStyle}>
          {`${value !== null && value !== undefined ? formatNumber(value) : 0} ${unit}`}
        </div>
      </div>
    </div>
  );
}

function QuestionListElementBox({
  title,
  avgScore,
  topScore,
  bottomScore,
  totalSubmission,
  correctSubmission,
  correctUserCnt,
  isSolved,
  tags,
  id,
  type,
  isColumn,
}: IQuestionListElementBox) {
  return (
    <>
      <Link to={URLByType[type](id)}>
        <div className={textBoxStyle} id={`element-${id}`}>
          <div className={textBoxMainStyle}>
            <ul className={tagListStyle}>
              {tags.map((tagId) => {
                const { name, color } = getTagById(tagId);
                return <TagBox name={name} color={color} key={tagId} />;
              })}
              <TagBox
                name={
                  type === PROBLEM_TYPE.LONG
                    ? '서술형'
                    : type === PROBLEM_TYPE.SHORT
                    ? '단답형'
                    : '객관식'
                }
                color='color2'
              />
              {isSolved !== undefined ? (
                <TagBox name={isSolved ? '푼 문제' : '안 푼 문제'} color='color3' />
              ) : (
                <></>
              )}
            </ul>
            <p className={titleStyle}>{title}</p>
          </div>
          <Divider className={dividerStyle} />

          <div className={problemStatisticsWrapperStyle[isColumn ? 'column' : 'row']}>
            {[
              { value: totalSubmission, unit: '', label: '제출' },
              { value: correctSubmission, unit: '', label: '정답' },
              { value: correctUserCnt, unit: '명', label: '맞힌 사람 수' },
              { value: avgScore, unit: '점', label: '평균점수' },
              { value: topScore, unit: '점', label: '최고점' },
              { value: bottomScore, unit: '점', label: '최저점' },
            ].map((e) =>
              isNumberNotEmpty(e.value) ? (
                <ProblemStatisticsBox
                  label={e.label}
                  value={e.value!}
                  unit={e.unit}
                  key={e.label + id}
                />
              ) : (
                <div key={e.label + id} style={{ display: 'none' }}></div>
              ),
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default QuestionListElementBox;
