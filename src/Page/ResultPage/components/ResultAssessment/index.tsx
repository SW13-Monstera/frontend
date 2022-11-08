import { MouseEvent, useState } from 'react';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { TextButton } from '../../../../Component/Button';
import CustomPopover from '../../../../Component/Utils/Popover';
import { usePopover } from '../../../../hooks/usePopover';
import { displayNoneStyle } from '../../../../styles/util.css';
import { ASSESSMENT_TYPE, TAssessment } from '../../../../types/api/problem';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../../types/button';
import {
  etcInputStyle,
  evaluationButtonListStyle,
  evaluationButtonListWrapperStyle,
  evaluationWrapperStyle,
  phraseStyle,
  popoverContentStyle,
  popoverListWrapperStyle,
  popoverMainContentStyle,
  popoverSubmitButtonStyle,
  popoverTitleStyle,
  popoverWrapperStyle,
} from '../../style.css';

interface IAssessmentPopover {
  gradingHistoryId?: number;
}

const EVALUATIONS = [
  { label: '😀 좋아요', value: ASSESSMENT_TYPE.GOOD },
  { label: '😐 적당해요', value: ASSESSMENT_TYPE.NORMAL },
  { label: '🙁 별로예요', value: ASSESSMENT_TYPE.BAD },
];
const COMMENTS = [
  '키워드 채점 기준이 정확하게 적용되지 않은 것 같아요.',
  '내용 채점 기준이 정확하게 적용되지 않은 것 같아요.',
  '기타',
];
const ASSESSMENT_BAD_CLASS = 'assessment-bad';
const ASSESSMENT_BAD_ETC_CLASS = 'assessment-bad--etc';

export const ResultAssessment = ({ gradingHistoryId }: IAssessmentPopover) => {
  if (!gradingHistoryId) return <></>;

  const { anchorEl, handleClick, handleClose, id: popoverId, open } = usePopover();
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isEvaluatedETC, setIsEvaluatedETC] = useState<boolean>(false);

  const handleAssessmentSubmit = (assessment: string, comment?: string) => {
    if (!gradingHistoryId) throw new Error('invalid id');
    problemApiWrapper
      .assessment(gradingHistoryId.toString(), {
        assessmentType: assessment as TAssessment,
        content: comment ?? '',
      })
      .then(() => {
        setIsEvaluated(true);
      });
  };

  return (
    <div className={evaluationWrapperStyle}>
      <div className={isEvaluated ? phraseStyle : displayNoneStyle}>소중한 의견 감사합니다.</div>
      <div className={isEvaluated ? displayNoneStyle : evaluationButtonListWrapperStyle}>
        <div className={phraseStyle}>채점 결과는 어땠나요?</div>
        <div className={evaluationButtonListStyle}>
          {EVALUATIONS.map((e) => {
            return (
              <TextButton
                type={BUTTON_TYPE.BUTTON}
                theme={BUTTON_THEME.TERTIARY}
                size={BUTTON_SIZE.SMALL}
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                  if (e.value === ASSESSMENT_TYPE.BAD) {
                    handleClick(event);
                  } else {
                    handleAssessmentSubmit(e.value);
                  }
                  handleClick(event);
                }}
                key={e.value}
              >
                {e.label}
              </TextButton>
            );
          })}
        </div>
        {isEvaluated ? (
          <></>
        ) : (
          <CustomPopover id={popoverId} open={open} anchorEl={anchorEl} handleClose={handleClose}>
            <div className={popoverWrapperStyle}>
              <div className={popoverMainContentStyle}>
                <ul className={popoverListWrapperStyle}>
                  <div className={popoverTitleStyle}>개선이 필요한 내용을 알려주세요.</div>
                  {COMMENTS.map((comment, idx) => (
                    <li
                      key={comment}
                      onClick={() => {
                        if (comment === '기타') {
                          setIsEvaluatedETC(true);
                        } else {
                          setIsEvaluatedETC(false);
                        }
                      }}
                    >
                      <input
                        type='radio'
                        id={comment}
                        className={`${ASSESSMENT_BAD_CLASS} ${
                          idx === COMMENTS.length - 1 ? ASSESSMENT_BAD_ETC_CLASS : ''
                        }`}
                        name={ASSESSMENT_BAD_CLASS}
                        value={comment}
                      />
                      <label htmlFor={comment} className={popoverContentStyle}>
                        {comment}
                      </label>
                    </li>
                  ))}
                </ul>
                {isEvaluatedETC ? (
                  <input
                    type='text'
                    placeholder='개선이 필요한 내용을 입력해주세요.'
                    className={`${ASSESSMENT_BAD_ETC_CLASS} ${etcInputStyle}`}
                  />
                ) : (
                  <></>
                )}
              </div>
              <TextButton
                theme={BUTTON_THEME.PRIMARY}
                size={BUTTON_SIZE.SMALL}
                className={popoverSubmitButtonStyle}
                onClick={() => {
                  const comment = document.querySelector(
                    `input[type=radio].${ASSESSMENT_BAD_CLASS}:checked`,
                  ) as HTMLInputElement;
                  if (comment.classList.contains(ASSESSMENT_BAD_ETC_CLASS)) {
                    const commentETC = document.querySelector(
                      `input[type=text].${ASSESSMENT_BAD_ETC_CLASS}`,
                    ) as HTMLTextAreaElement;
                    handleAssessmentSubmit(ASSESSMENT_TYPE.BAD, commentETC.value);
                  } else {
                    handleAssessmentSubmit(ASSESSMENT_TYPE.BAD, comment.value);
                  }
                }}
              >
                제출하기
              </TextButton>
            </div>
          </CustomPopover>
        )}
      </div>
    </div>
  );
};
