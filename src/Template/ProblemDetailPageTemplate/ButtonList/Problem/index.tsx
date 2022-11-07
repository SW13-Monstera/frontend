import { useNavigate } from 'react-router-dom';
import { TextButton } from '../../../../Component/Button';
import { URL } from '../../../../constants/url';
import { useAuthStore } from '../../../../hooks/useStore';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../../types/button';
import { buttonListStyle, buttonListWrapperStyle } from '../../style.css';

interface IProblemDetailButtonList {
  handleSubmit?: () => void;
  isResult?: boolean;
  resetResult?: () => void;
  isResultPage?: boolean;
  isSubmittable?: boolean;
}

export const ProblemDetailButtonList = ({
  handleSubmit,
  isResult = false,
  resetResult = () => {
    return;
  },
  isResultPage = false,
  isSubmittable = false,
}: IProblemDetailButtonList) => {
  const { isLogin } = useAuthStore();
  const navigate = useNavigate();
  return (
    <>
      <div className={buttonListWrapperStyle}>
        <div className={buttonListStyle}>
          <TextButton
            type={BUTTON_TYPE.BUTTON}
            theme={BUTTON_THEME.SECONDARY}
            size={BUTTON_SIZE.MEDIUM}
            onClick={() => {
              navigate(isResultPage ? -2 : -1);
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
      </div>
    </>
  );
};
