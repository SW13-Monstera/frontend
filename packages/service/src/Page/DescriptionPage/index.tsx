import {
  contentElementTextWrapperStyle,
  contentElementWrapperStyle,
  contentTextStyle,
  contentTitleStyle,
  contentWrapperStyle,
  numberStyle,
  pageContentStyle,
  pageWrapperStyle,
  titleWrapperStyle,
} from './style.css';

const items = [
  {
    title: '답안에 키워드가 있는지 확인하여 키워드 채점을 해요',
    description:
      '특정 키워드가 포함되어있기만 한다면 한개당 +1~2점 정도를 드려요. 보통 한 문제에 4~5개정도의 키워드가 있어요.',
  },
  {
    title: '답안에 특정 내용의 포함 여부를 통해 내용 채점을 해요',
    description:
      '내용 채점은 AI 모델을 기반으로 하고, 아직 베타버전이에요. 보통 한 문제에 4~5개정도의 내용기준이 있으며 한개당 +1~2점 정도를 드려요.',
  },
  {
    title: '키워드 점수와 내용 점수를 더해서 가산점을 드려요',
    description:
      '채점을 하지 않는 경우는 점수에 합산되지 않아요. 채점 결과를 보고 채점결과페이지 오른쪽 하단의 “채점 결과는 어땠나요?”에 응답해주신다면 앞으로 더 발전된 AI 채점으로 돌아올거예요!',
  },
  {
    title: '가산점은 총점과 랭킹에 반영되어요.',
    description:
      '현재는 마이페이지에서 확인할 수 있고, 추후 제공될 리더보드에도 적용될 예정이에요.',
  },
];

export const DescriptionPage = () => {
  return (
    <div className={pageWrapperStyle}>
      <div className={pageContentStyle}>
        <div className={titleWrapperStyle}>
          <h1>AI 서술형 채점 베타 서비스는?</h1>
          <h2>CS Broker의 베타 서비스인 AI 서술형 채점 기능을 설명드려요.</h2>
        </div>
        <div className={contentWrapperStyle}>
          {items.map((item, idx) => (
            <div key={item.title} className={contentElementWrapperStyle}>
              <div className={numberStyle}>{idx + 1}</div>
              <div className={contentElementTextWrapperStyle}>
                <h3 className={contentTitleStyle}>{item.title}</h3>
                <p className={contentTextStyle}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
