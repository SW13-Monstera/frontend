import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColumnBox, RowBox } from '../../../../Component/Box/CustomBox';
import { TextButton } from '../../../../Component/Button';
import { CustomModal } from '../../../../Component/Utils/Modal/CustomModal';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import { URL } from '../../../../constants/url';
import useModal from '../../../../hooks/useModal';
import { ProblemSetDetailButtonList } from '../../../../Organism/ButtonList/ProblemSet';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../../types/button';
import { IProblemSetLongProblemResult } from '../../../../types/problem';
import { createUserAnswerDOM } from '../../../../utils/createLongProblemDOM';
import { ChartContent } from '../../../ResultPage/Content/Chart';
import { StandardAnswerContent } from '../../../ResultPage/Content/StandardAnswer';
import { UserAnswerContent } from '../../../ResultPage/Content/UserAnswer';
import { chartContentWrapperStyle } from './style.css';

export const LongProblemSetResult = ({ result, resultList }: IProblemSetLongProblemResult) => {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    if (document.readyState === 'complete') {
      createUserAnswerDOM(result);
    }
  }, [result]);

  return (
    <>
      <CustomModal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ColumnBox>
          <div>결과</div>
          <div>
            {resultList?.map((e, idx) => (
              <RowBox key={e.userAnswer + idx.toString()}>
                <div>{idx}</div>
                <div>{e.score}</div>
              </RowBox>
            ))}
          </div>
          <TextButton
            type={BUTTON_TYPE.SUBMIT}
            theme={BUTTON_THEME.PRIMARY}
            size={BUTTON_SIZE.MEDIUM}
            onClick={() => {
              navigate(URL.PROBLEM_SET_LIST);
            }}
          >
            확인
          </TextButton>
        </ColumnBox>
      </CustomModal>
      <CustomSplit
        leftSideContent={<StandardAnswerContent result={result} />}
        rightSideContent={<UserAnswerContent result={result} />}
      />
      <ProblemSetDetailButtonList isResultPage exit={openModal} />
      <div className={chartContentWrapperStyle}>
        <ChartContent result={result} />
      </div>
    </>
  );
};
