import { useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useMutation, useQuery } from 'react-query';
import { MetaTag } from '../../utils/MetaTag';
import { INVALID_ID_ERROR } from '../../../errors';
import ProblemTitle from '../../../Organism/ProblemTitle';
import { ErrorPage } from '../../Error/ErrorPage';
import { pageWrap, postListWrap } from './style.css';
import DescriptionBox from './components/DescriptionBox';
import PostBox from './components/PostBox';
import PostInput from './components/PostInput';
import { communityApiWrapper } from '../../../api/wrapper/community/communityApiWrapper';

export function CommunityLongQuestionDetailPage() {
  const { id } = useParams();
  if (!id) throw INVALID_ID_ERROR;

  const { data, refetch: refetchProblemDetail } = useQuery<ILongProblemDetailResponseData>(
    ['longProblemDetail', id],
    () => problemApiWrapper.longProblemDetail(id),
  );
  const { data: communityPost } = useQuery(['communityPost', id], () =>
    communityApiWrapper.getPost({ problemId: id }),
  );
  const { mutate: addPost } = useMutation(communityApiWrapper.addPost);

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
        <DescriptionBox
          id={id}
          description={data.description}
          isLiked={data.isLiked}
          likeCount={data.likeCount}
          isBookmarked={data.isBookmarked}
          bookmarkCount={data.bookmarkCount}
          refetchProblemDetail={refetchProblemDetail}
        />
        <div className={postListWrap}>
          {communityPost?.map((post) => (
            <PostBox key={post.id} {...post}></PostBox>
          ))}
        </div>
        <form
          id='post-form'
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.target as HTMLFormElement);
            const content = data.get('post-input')?.toString();
            if (!content) return;
            addPost({ problemId: parseInt(id), content });
          }}
        >
          <PostInput />
        </form>
      </div>
    </>
  );
}
