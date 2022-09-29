import {
  descStyle,
  questionContentStyle,
  buttonListStyle,
  topStyle,
  buttonListWrapperStyle,
  bottomContentStyle,
  pageStyle,
} from './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import TextButton from '../../Component/Button/TextButton';
import { URL } from '../../constants/url';
import ProblemTitle from '../../Organism/ProblemTitle';
import { useAuthStore } from '../../hooks/useStore';
import { IProblemDetailPageTemplate } from '../../types/problem';
import useModal from '../../hooks/useModal';
import { CustomModal } from '../../Component/Utils/Modal/CustomModal';
import PageTemplate from '../PageTemplate';

export const ProblemDetailPageTemplate = ({
  data,
  children,
  handleSubmit,
  bottomContent,
  isResult = false,
  resetResult = () => {
    return;
  },
  isResultPage = false,
}: IProblemDetailPageTemplate) => {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const { isModalOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  if (!id) return <></>;

  return (
    <>
      <CustomModal isModalOpen={isModalOpen} closeModal={closeModal}>
        제출기록을 넣을 자리
      </CustomModal>
      <div>
        {data ? (
          <PageTemplate>
            <div className={pageStyle}>
              <div className={topStyle}>
                <div className={descStyle}>
                  <ProblemTitle
                    id={id}
                    title={data.title ?? ''}
                    tags={data.tags ?? []}
                    totalSubmission={data.totalSubmission}
                    avgScore={data.avgScore}
                    topScore={data.topScore}
                    bottomScore={data.bottomScore}
                    correctSubmission={data.correctSubmission}
                    correctUserCnt={data.correctUserCnt}
                    isSolved={data.isSolved ?? false}
                  />
                </div>
              </div>
              <div className={questionContentStyle}>{children}</div>
              <div className={buttonListWrapperStyle}>
                <TextButton
                  type={BUTTON_TYPE.BUTTON}
                  theme={BUTTON_THEME.TERTIARY}
                  size={BUTTON_SIZE.MEDIUM}
                  onClick={openModal}
                  isActivated={false}
                >
                  제출기록
                </TextButton>
                <div className={buttonListStyle}>
                  <TextButton
                    type={BUTTON_TYPE.BUTTON}
                    theme={BUTTON_THEME.SECONDARY}
                    size={BUTTON_SIZE.MEDIUM}
                    onClick={() => {
                      navigate(URL.PROBLEM_LIST);
                    }}
                  >
                    돌아가기
                  </TextButton>
                  {isLogin ? (
                    isResult ? (
                      <TextButton
                        type={BUTTON_TYPE.SUBMIT}
                        theme={BUTTON_THEME.PRIMARY}
                        size={BUTTON_SIZE.MEDIUM}
                        onClick={() => {
                          isResultPage ? navigate(-1) : resetResult();
                        }}
                      >
                        다시풀기
                      </TextButton>
                    ) : (
                      <TextButton
                        type={BUTTON_TYPE.SUBMIT}
                        theme={BUTTON_THEME.PRIMARY}
                        size={BUTTON_SIZE.MEDIUM}
                        onClick={handleSubmit}
                      >
                        제출하기
                      </TextButton>
                    )
                  ) : (
                    <TextButton
                      type={BUTTON_TYPE.SUBMIT}
                      theme={BUTTON_THEME.PRIMARY}
                      size={BUTTON_SIZE.MEDIUM}
                      onClick={() => {
                        navigate(URL.LOGIN);
                      }}
                    >
                      로그인
                    </TextButton>
                  )}
                </div>
              </div>
            </div>
            <div className={bottomContentStyle}>{bottomContent}</div>
          </PageTemplate>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
