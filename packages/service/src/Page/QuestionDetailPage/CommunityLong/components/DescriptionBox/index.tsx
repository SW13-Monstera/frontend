import Box from '../Box';
import IconButton from '../IconButton';
import { ReactComponent as StarIcon } from '../../../../../assets/icons/star.svg';
import { ReactComponent as ThumbUpIcon } from '../../../../../assets/icons/thumb_up.svg';
import { COLOR } from '../../../../../constants/color';
import { buttonWrap, descriptionWrap, topWrap } from './style.css';

type Props = {
  description: string;
};

const DescriptionBox = ({ description }: Props) => {
  return (
    <Box>
      <div className={topWrap}>
        <div>문제 설명</div>
        <div className={buttonWrap}>
          <IconButton
            text='8'
            onClick={() => {
              return null;
            }}
          >
            <StarIcon fill={COLOR.GRAY} width='2rem' height='2rem' />
          </IconButton>
          <IconButton
            text='10'
            onClick={() => {
              return null;
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
