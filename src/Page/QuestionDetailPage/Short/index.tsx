import Header from '../../../Template/Header';
import {
  themeLightClass,
  pageStyle,
  descStyle,
  questionContentStyle,
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  buttonListStyle,
  themeDarkClass,
  answerInputWrapperStyle,
  answerInputTitleStyle,
  answerLengthButtonStyle,
  answerLengthOpenStyle,
  answerLengthNotOpenStyle,
  hintWrapperStyle,
  answerInputScoredStyle,
  topStyle,
} from './style.css';
import '../gutter.css';
import { Link, useParams } from 'react-router-dom';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../types/button';
import TextButton from '../../../Component/Button/TextButton';
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg';
import { useAuthStore } from '../../../hooks/useStore';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { URL } from '../../../constants/url';
import {
  IShortProblemDetailResponseData,
  IShortProblemResultData,
} from '../../../types/api/problem';
import { TransparentButton } from '../../../Component/Button';
import { XIcon } from '../../../Icon/XIcon';
import { COLOR } from '../../../constants/color';
import { OIcon } from '../../../Icon/OIcon';
import ProblemTitle from '../../../Organism/ProblemTitle';

export function ShortQuestionDetailPage() {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const [isDark, setIsDark] = useState(true);
  const [data, setData] = useState<IShortProblemDetailResponseData>();
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [result, setResult] = useState<IShortProblemResultData | null>(null);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isGraded, setIsGraded] = useState(false);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  function handleSubmit() {
    if (!id) return;
    const data = (document.getElementById('answer') as HTMLInputElement).value;
    problemApiWrapper.shortProblemResult(id, data).then((data) => setResult(data));
  }

  function showHint() {
    setIsHintOpen(true);
    setTimeout(() => {
      setIsHintOpen(false);
    }, 2000);
  }

  useEffect(() => {
    if (!id) return;
    problemApiWrapper.shortProblemDetail(id).then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    if (!result) return;
    setIsAnswer(result.isAnswer);
    setIsGraded(true);
    setTimeout(() => {
      setIsGraded(false);
      (document.getElementById('answer') as HTMLInputElement).value = '';
    }, 1000);
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
                  correctCnt={data.correctCnt}
                  wrongCnt={data.wrongCnt}
                />
              </div>
              <button onClick={toggleDarkMode}>{isDark ? <MoonIcon /> : <SunIcon />}</button>
            </div>
            <div className={questionContentStyle}>
              <div className={contentWrapperStyle}>
                <div className={contentTitleStyle}>문제 설명</div>
                <div className={problemDescContentStyle}>{data?.description}</div>
              </div>
              <div className={answerInputWrapperStyle}>
                <label htmlFor='answer' className={answerInputTitleStyle}>
                  정답 입력
                </label>
                <input
                  id='answer'
                  placeholder='답변을 입력해주세요'
                  className={
                    answerInputScoredStyle[isGraded ? (isAnswer ? 'correct' : 'wrong') : 'default']
                  }
                  autoComplete='off'
                ></input>
                {isGraded ? (
                  isAnswer ? (
                    <OIcon fill={COLOR.CORRECT} width='3rem' height='3rem' />
                  ) : (
                    <XIcon fill={COLOR.ERROR} width='3rem' height='3rem' />
                  )
                ) : (
                  <></>
                )}
              </div>
              <div className={hintWrapperStyle}>
                <TransparentButton className={answerLengthButtonStyle} onClick={showHint}>
                  힌트 보기
                </TransparentButton>
                <div className={isHintOpen ? answerLengthOpenStyle : answerLengthNotOpenStyle}>
                  정답은 {data.answerLength}글자
                </div>
              </div>
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
