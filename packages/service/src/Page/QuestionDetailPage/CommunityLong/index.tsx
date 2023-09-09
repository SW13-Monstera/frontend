import { useNavigate, useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { MetaTag } from '../../utils/MetaTag';
import { ProblemDescriptionBox } from '../../../Component/Box/ProblemDescriptionBox';
import { useState } from 'react';
import { LONG_PROBLEM_ANSWER } from '../../../constants/localStorage';
import { localStorageWithExpiry } from 'auth/utils/localstorage';
import { INVALID_ID_ERROR } from '../../../errors';
import ProblemTitle from '../../../Organism/ProblemTitle';
import { ErrorPage } from '../../Error/ErrorPage';
import { pageWrap, problemDescriptionWrap, profileImage } from './style.css';

export function CommunityLongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) throw INVALID_ID_ERROR;
  const [userAnswer, setUserAnswer] = useState(
    localStorageWithExpiry.getItem(LONG_PROBLEM_ANSWER(id!)) ?? '',
  );
  const { data, refetch } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id),
    { refetchOnWindowFocus: false },
  );

  if (!data) return <ErrorPage />;

  return (
    <>
      <MetaTag
        title={`CS Broker - ${data?.title}`}
        description={`${data?.title}에 관한 서술형 문제입니다. 답안 작성 후 제출하기 버튼을 눌러주세요.`}
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
        <div className={problemDescriptionWrap}>
          <ProblemDescriptionBox>{data?.description}</ProblemDescriptionBox>
        </div>
        <div>
          <div>
            <div>
              <div>
                <img src='' className={profileImage} />
                <div>김현조</div>
              </div>
              <button>좋아요 19</button>
            </div>
            <div>
              동일한 프로세스 내의 스레드는 Stack을 제외한 나머지 Code, Data, Heap 영역을
              공유합니다. 그러므로 A스레드에서 B스레드로 context switching이 일어날 때 먼저
              A스레드의 ThreadStack영역을 B스레드의 ThreadStack으로 교체합니다. 그리고 멀티스레드의
              context switching이 멀티프로세스에 비해 빠른 이유는 Stack영역을 제외한 나머지의 영역을
              공유한다는 점도 있지만 추가적으로 캐쉬와도 연관이 있어요. 프로세스에서 context
              switching이 일어나면 캐쉬데이터를 전부 지우고 새로 만들어요. 그러나 스레드간의 context
              switching은 어차피 자원을 공유하기 때문에 캐시를 갈아 끼울 필요가 없습니다.
            </div>
          </div>
          <div>
            <div>엥 아닌듯 - 이앵앵 Oct 13, 2022 at 8:54</div>
            <div>엥 아닌듯 - 이앵앵 Oct 13, 2022 at 8:54</div>
          </div>
        </div>
      </div>
    </>
  );
}
