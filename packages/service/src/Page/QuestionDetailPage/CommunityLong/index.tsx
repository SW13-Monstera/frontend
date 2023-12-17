import { useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { MetaTag } from '../../utils/MetaTag';
import { INVALID_ID_ERROR } from '../../../errors';
import ProblemTitle from '../../../Organism/ProblemTitle';
import { ErrorPage } from '../../Error/ErrorPage';
import { pageWrap, postListWrap } from './style.css';
import DescriptionBox from './components/DescriptionBox';
import PostBox from './components/PostBox';
import { communityApiWrapper } from '../../../api/wrapper/community/communityApiWrapper';
import { getTagById } from '../../../utils/getTagbyId';

export function CommunityLongQuestionDetailPage() {
  const { id } = useParams();
  if (!id) throw INVALID_ID_ERROR;

  const { data, refetch: refetchProblemDetail } = useQuery<ILongProblemDetailResponseData>(
    ['longProblemDetail', id],
    () => problemApiWrapper.longProblemDetail(id),
  );
  const { data: communityPost, refetch: refetchCommunityPost } = useQuery(
    ['communityPost', id],
    () => communityApiWrapper.getPost({ problemId: id }),
  );

  if (!data) return <ErrorPage />;

  return (
    <>
      <MetaTag
        title={`${data?.title}`}
        keywords={`${[...data.tags.map((tag) => getTagById(tag).name), data.title, '서술형']
          .filter((data) => !!data)
          .join(',')}`} //${data?.tags.join(', ')}, ${data?.title}, 서술형
      />
      <div className={pageWrap}>
        <ProblemTitle
          id={id}
          title={data.title}
          tags={data.tags}
          answerCount={communityPost?.length}
          isSolved={data.isSolved}
        />
        <DescriptionBox
          id={id}
          description={data.description}
          isLiked={data.isLiked}
          likeCount={data.likeCount}
          isBookmarked={data.isBookmarked}
          bookmarkCount={data.bookmarkCount}
          refetchProblemDetail={refetchProblemDetail}
          refetchCommunityPost={refetchCommunityPost}
        />
        <div className={postListWrap}>
          {communityPost?.map((post) => (
            <PostBox refetchCommunityPost={refetchCommunityPost} key={post.id} {...post}></PostBox>
          ))}
        </div>
      </div>
    </>
  );
}
