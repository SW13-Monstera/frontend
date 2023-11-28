import Box from '../Box';
import IconButton from '../IconButton';
import { ReactComponent as StarIcon } from '../../../../../assets/icons/star.svg';
import { ReactComponent as ThumbUpIcon } from '../../../../../assets/icons/thumb_up.svg';
import { COLOR } from '../../../../../constants/color';
import { buttonWrap, descriptionWrap, topWrap, wrap } from './style.css';
import { useMutation } from 'react-query';
import { problemApiWrapper } from '../../../../../api/wrapper/problem/problemApiWrapper';

type Props = {
  id: string;
  description: string;
};

const DescriptionBox = ({ id, description }: Props) => {
  const { mutate: likeProblem } = useMutation(['likeProblem', id], () =>
    problemApiWrapper.likeProblem({ problemId: id }),
  );
  const { mutate: bookmarkProblem } = useMutation(['bookmarkProblem', id], () =>
    problemApiWrapper.bookmarkProblem({ problemId: id }),
  );
  return (
    <Box className={wrap}>
      <div className={topWrap}>
        <div>문제 설명</div>
        <div className={buttonWrap}>
          <IconButton
            text='8'
            onClick={() => {
              likeProblem();
            }}
          >
            <StarIcon fill={COLOR.GRAY} width='2rem' height='2rem' />
          </IconButton>
          <IconButton
            text='10'
            onClick={() => {
              bookmarkProblem();
            }}
          >
            <ThumbUpIcon fill={COLOR.GRAY} width='2rem' height='2rem' />
          </IconButton>
        </div>
      </div>
      <div className={descriptionWrap}>{description}</div>
    </Box>
  );
};

export default DescriptionBox;
