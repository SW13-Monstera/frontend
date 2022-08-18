import Header from '../../../Template/Header';
import {
  themeLightClass,
  pageStyle,
  topStyle,
  descStyle,
  titleTagStyle,
  questionContentStyle,
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  buttonListStyle,
  themeDarkClass,
  answerInputContentStyle,
  tagListStyle,
  answerInputWrapperStyle,
  answerInputTitleStyle,
  answerLengthButtonStyle,
  answerLengthOpenStyle,
  answerLengthNotOpenStyle,
  hintWrapperStyle,
} from './style.css';
import '../gutter.css';
import { Link, useParams } from 'react-router-dom';
import TagBox from '../../../Component/Box/TagBox';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../types/button';
import TextButton from '../../../Component/Button/TextButton';
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg';
import { useAuthStore } from '../../../hooks/useStore';
import { useEffect, useState } from 'react';
import baseFontStyle from '../../../styles/font.css';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { URL } from '../../../constants/url';
import { IShortProblemDetailResponseData } from '../../../types/api/problem';
import { getTagById } from '../../../utils/getTagbyId';
import { ReactComponent as DownIcon } from '../../../assets/icons/down-arrow-icon.svg';
import { ReactComponent as UpIcon } from '../../../assets/icons/up-arrow-icon.svg';
import { TransparentButton } from '../../../Component/Button';
import { COLOR } from '../../../constants/color';

export function ShortQuestionDetailPage() {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const [data, setData] = useState<IShortProblemDetailResponseData>();
  const [isHintOpen, setIsHintOpen] = useState(false);

  const [isDark, setIsDark] = useState(true);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  function handleSubmit() {
    if (!id) return;
    const data = (document.getElementById('answer') as HTMLInputElement).value;
    problemApiWrapper.shortProblemResult(id, data);
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

  return (
    <div>
      {data ? (
        <>
          <Header />
          <main className={`${isDark ? themeDarkClass : themeLightClass} ${pageStyle}`}>
            <div className={topStyle}>
              <div className={descStyle}>
                <div className={titleTagStyle}>
                  <h1 className={baseFontStyle.title}>{data?.title}</h1>
                  <ul className={tagListStyle}>
                    {data?.tags.map((tagId) => {
                      const { name, color } = getTagById(tagId);
                      return <TagBox key={tagId} name={name} color={color} />;
                    })}
                  </ul>
                </div>
                <div className={baseFontStyle.medium}>
                  {`제출 : ${data?.totalSolved ?? 0}, 맞은 사람 수 : ${
                    data?.correctCnt ?? 0
                  }명, 틀린 사람 수 : ${data?.wrongCnt ?? 0}명`}
                </div>
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
                  className={answerInputContentStyle}
                ></input>
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
