import Header from '../../Template/Header';
import Split from 'react-split';
import {
  themeLightClass,
  pageStyle,
  topStyle,
  descStyle,
  titleTagStyle,
  questionContentStyle,
  splitStyle,
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  buttonListStyle,
  themeDarkClass,
  answerInputContentStyle,
} from './style.css';
import './gutter.css';
import { Link, useLocation } from 'react-router-dom';
import { listData } from '../../data';
import Tag from '../../Component/Box/TagBox';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import TextButton from '../../Component/Button/TextButton';
import { IProblemIdLinkState } from '../../types/problem';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { useAuthStore } from '../../hooks/useStore';
import { useState } from 'react';
import baseFontStyle from '../../styles/font.css';

function QuestionDetailPage() {
  const state = useLocation().state as IProblemIdLinkState;
  const problemData = listData[state.problemId];

  const { isLogin } = useAuthStore();
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  return (
    <>
      <Header />
      <main className={`${isDark ? themeDarkClass : themeLightClass} ${pageStyle}`}>
        <div className={topStyle}>
          <div className={descStyle}>
            <div className={titleTagStyle}>
              <h1 className={baseFontStyle.title}>{problemData.title}</h1>
              <ul>
                {problemData.tagList.map((tagName) => (
                  <Tag name={tagName} key={tagName} />
                ))}
              </ul>
            </div>
            <div className={baseFontStyle.medium}>
              {`제출 : ${problemData.numberSolved}, 평균 점수 : ${problemData.averageScore}점, 최고점 : ${problemData.highestScore}점 , 최저점 : ${problemData.lowestScore}점`}
            </div>
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
              <div className={problemDescContentStyle}>{problemData.desc}</div>
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
            <Link to={`/result/${problemData.id}`} state={{ problemId: problemData.id }}>
              <TextButton
                type={BUTTON_TYPE.SUBMIT}
                theme={BUTTON_THEME.PRIMARY}
                size={BUTTON_SIZE.MEDIUM}
              >
                제출하기
              </TextButton>
            </Link>
          ) : (
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              로그인
            </TextButton>
          )}
          <Link to='/list'>
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
  );
}
export default QuestionDetailPage;
