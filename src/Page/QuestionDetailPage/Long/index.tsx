import Header from '../../../Template/Header';
import Split from 'react-split';
import {
  themeLightClass,
  pageStyle,
  topStyle,
  descStyle,
  questionContentStyle,
  splitStyle,
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  buttonListStyle,
  themeDarkClass,
  answerInputContentStyle,
} from './style.css';
import '../gutter.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../types/button';
import TextButton from '../../../Component/Button/TextButton';
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg';
import { useAuthStore } from '../../../hooks/useStore';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { URL, URLWithParam } from '../../../constants/url';
import { ILongProblemDetailResponseData, ILongProblemResultData } from '../../../types/api/problem';
import ProblemTitle from '../../../Organism/ProblemTitle';

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLogin } = useAuthStore();
  const [data, setData] = useState<ILongProblemDetailResponseData>();
  const [result, setResult] = useState<ILongProblemResultData | null>(null);

  const [isDark, setIsDark] = useState(true);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  function handleSubmit() {
    if (!id) return;
    const answer = (document.getElementById('answer') as HTMLTextAreaElement).value;
    problemApiWrapper.longProblemResult(id, answer).then((data) => {
      setResult(data);
    });
  }

  useEffect(() => {
    if (!id) return;
    problemApiWrapper.longProblemDetail(id).then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    if (!id || !result) return;
    navigate(URLWithParam.LONG_PROBLEM_RESULT(id), { state: result });
  }, [result]);

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
                  title={data.title}
                  tags={data.tags}
                  totalSolved={data.totalSolved}
                  avgScore={data.avgScore}
                  topScore={data.topScore}
                  bottomScore={data.bottomScore}
                />
              </div>
              <button onClick={toggleDarkMode}>{isDark ? <MoonIcon /> : <SunIcon />}</button>
            </div>
            <div className={questionContentStyle}>
              <Split
                sizes={[25, 75]}
                minSize={100}
                expandToMin={false}
                gutterSize={10}
                gutterAlign='center'
                snapOffset={30}
                dragInterval={1}
                direction='horizontal'
                cursor='col-resize'
                className={splitStyle}
              >
                <div className={contentWrapperStyle}>
                  <div className={contentTitleStyle}>문제 설명</div>
                  <div className={problemDescContentStyle}>{data?.description}</div>
                </div>
                <div className={contentWrapperStyle}>
                  <label htmlFor='answer' className={contentTitleStyle}>
                    답안 작성
                  </label>
                  <textarea
                    id='answer'
                    placeholder='답변을 입력해주세요'
                    className={answerInputContentStyle}
                  ></textarea>
                </div>
              </Split>
            </div>

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
}
