import { useNavigate } from 'react-router-dom';
import { TextButton } from '../../../Component/Button';
import { URL } from '../../../constants/url';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../types/button';
import { getUserInfo } from '../../../utils/userInfo';
import { buttonListWrapperStyle } from './style.css';

interface IProblemSetDetailButtonList {
  handleSubmit?: () => void;
  isResult?: boolean;
  resetResult?: () => void;
  isResultPage?: boolean;
  isSubmittable?: boolean;
  moveNext?: () => void;
  exit?: () => void;
}

export const ProblemSetDetailButtonList = ({
  handleSubmit,
  isResult = false,
  resetResult = () => {
    return;
  },
  moveNext = () => {
    return;
  },
  exit = () => {
    return;
  },
  isResultPage = false,
  isSubmittable = false,
}: IProblemSetDetailButtonList) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={buttonListWrapperStyle}>
        {getUserInfo() ? (
          isResult ? (
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
              onClick={moveNext}
            >
              다음 문제로
            </TextButton>
          ) : isResultPage ? (
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
              onClick={exit}
            >
              종료
            </TextButton>
          ) : (
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
              onClick={handleSubmit}
              isActivated={isSubmittable}
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
    </>
  );
};
