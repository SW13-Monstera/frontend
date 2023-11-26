import { useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { MetaTag } from '../../utils/MetaTag';
import { INVALID_ID_ERROR } from '../../../errors';
import ProblemTitle from '../../../Organism/ProblemTitle';
import { ErrorPage } from '../../Error/ErrorPage';
import { contentWrap, pageWrap, profileImage, profileWrap } from './style.css';
import profileImageSrc from '../../../assets/icons/mypage-icon.svg';
import DescriptionBox from './components/DescriptionBox';

export function CommunityLongQuestionDetailPage() {
  const { id } = useParams();
  if (!id) throw INVALID_ID_ERROR;

  const { data } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id),
    { refetchOnWindowFocus: false },
  );

  if (!data) return <ErrorPage />;

  return (
    <>
      <MetaTag
        title={`${data?.title}`}
        keywords={`${data?.tags.join(', ')}, ${data?.title}, 서술형`}
      />
      <div className={pageWrap}>
        <ProblemTitle
          id={id}
          title={data.title}
          tags={data.tags}
          totalSubmission={data.totalSubmission}
          isSolved={data.isSolved}
        />
        <DescriptionBox description={data.description} />
        <div>
          <div>
            <div className={contentWrap}>
              <div className={profileWrap}>
                <img src={profileImageSrc} className={profileImage} />
                <div>김현조</div>
                <button type='button'>좋아요 19</button>
              </div>
              <div>
                동일한 프로세스 내의 스레드는 Stack을 제외한 나머지 Code, Data, Heap 영역을
                공유합니다. 그러므로 A스레드에서 B스레드로 context switching이 일어날 때 먼저
                A스레드의 ThreadStack영역을 B스레드의 ThreadStack으로 교체합니다. 그리고
                멀티스레드의 context switching이 멀티프로세스에 비해 빠른 이유는 Stack영역을 제외한
                나머지의 영역을 공유한다는 점도 있지만 추가적으로 캐쉬와도 연관이 있어요.
                프로세스에서 context switching이 일어나면 캐쉬데이터를 전부 지우고 새로 만들어요.
                그러나 스레드간의 context switching은 어차피 자원을 공유하기 때문에 캐시를 갈아 끼울
                필요가 없습니다.
              </div>
            </div>
            <div>
              <div>엥 아닌듯 - 이앵앵 Oct 13, 2022 at 8:54</div>
              <div>엥 아닌듯 - 이앵앵 Oct 13, 2022 at 8:54</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const POST_MOCK_DATA = [
  {
    id: 1,
    content: 'CONTENT',
    username: 'USER',
    likeCount: 1,
    isLiked: true,
    comments: [
      {
        id: 1,
        content: 'CONTENT',
        username: 'USER',
        likeCount: 1,
        isLiked: true,
        createdAt: '2023-11-25T14:19:59.702732',
      },
    ],
  },
];
