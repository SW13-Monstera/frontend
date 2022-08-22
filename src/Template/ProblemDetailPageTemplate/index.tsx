import { ReactElement, useState } from 'react';
import {
  themeLightClass,
  pageStyle,
  descStyle,
  questionContentStyle,
  buttonListStyle,
  themeDarkClass,
  topStyle,
} from './style.css';
import '../../styles/gutter.css';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import TextButton from '../../Component/Button/TextButton';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { URL } from '../../constants/url';
import ProblemTitle from '../../Organism/ProblemTitle';
import { useAuthStore } from '../../hooks/useStore';
import {
  ILongProblemDetailResponseData,
  IMultipleProblemDetailResponseData,
  IShortProblemDetailResponseData,
} from '../../types/api/problem';

interface IProblemDetailResponseData
  extends IShortProblemDetailResponseData,
    IMultipleProblemDetailResponseData,
    ILongProblemDetailResponseData {}

type TPartialProblemDetailResponseData = Partial<IProblemDetailResponseData>;

interface IProblemDetailPageTemplate {
  data: TPartialProblemDetailResponseData | null;
  handleSubmit: () => void;
  children?: ReactElement;
}

export const ProblemDetailPageTemplate = ({
  data,
  handleSubmit,
  children,
}: IProblemDetailPageTemplate) => {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  if (!id) return <></>;

  return (
    <div>
      {data ? (
        <>
          <Header />
          <main className={`${isDark ? themeDarkClass : themeLightClass} ${pageStyle}`}>
            <div className={topStyle}>
              <div className={descStyle}>
                <ProblemTitle
                  id={id}
                  title={data.title ?? ''}
                  tags={data.tags ?? []}
                  totalSolved={data.totalSolved}
                  avgScore={data.avgScore}
                  topScore={data.topScore}
                  bottomScore={data.bottomScore}
                  correctCnt={data.correctCnt}
                  wrongCnt={data.wrongCnt}
                />
              </div>
              <button onClick={toggleDarkMode}>{isDark ? <MoonIcon /> : <SunIcon />}</button>
            </div>
            <div className={questionContentStyle}>{children}</div>
            <div className={buttonListStyle}>
              {isLogin ? (
                <TextButton
                  type={BUTTON_TYPE.SUBMIT}
                  theme={BUTTON_THEME.PRIMARY}
                  size={BUTTON_SIZE.MEDIUM}
                  onClick={handleSubmit}
                >
                  제출하기
                </TextButton>
              ) : (
                <TextButton
                  type={BUTTON_TYPE.SUBMIT}
                  theme={BUTTON_THEME.PRIMARY}
                  size={BUTTON_SIZE.MEDIUM}
                >
                  로그인
                </TextButton>
              )}
              <Link to={URL.PROBLEM_LIST}>
                <TextButton
                  type={BUTTON_TYPE.BUTTON}
                  theme={BUTTON_THEME.SECONDARY}
                  size={BUTTON_SIZE.MEDIUM}
                >
                  돌아가기
                </TextButton>
              </Link>
            </div>
          </main>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
