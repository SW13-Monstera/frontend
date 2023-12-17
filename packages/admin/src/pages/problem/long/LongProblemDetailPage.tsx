import PageTemplate from '../../../templates/PageTemplate';
import {
  Typography,
  Box,
  Button,
  Divider,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { longProblemApiWrapper } from '../../../api/wrapper/problem/longProblemApiWrapper';
import { URLWithParam } from '../../../constants/url';
import { IProblemUpdateData } from '../../../types/problem/api';
import { TAGS } from '../../../constants/tags';
import { useQuery } from 'react-query';
import { MarkdownCard } from '../../../components/Card/MarkdownCard';
import { DetailTitle } from '../../../components/Typography/DetailTitle';

export const LongProblemDetailPage = () => {
  const { id } = useParams();
  const { data, refetch } = useQuery(['long-problems'], getLongProblemDetailData, {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  function getLongProblemDetailData() {
    if (!id) return;
    return longProblemApiWrapper.getLongProblemDetail({ problem_id: id }).then((res) => {
      return res;
    });
  }

  function handleProblemGradablility() {
    if (!id || !data) return;
    if (!data.isGradable) return;
    const newData: IProblemUpdateData = { ...data, isGradable: !data.isGradable };
    longProblemApiWrapper.updateLongProblem(id, newData).then(() => {
      refetch();
    });
  }

  function handleProblemActivate() {
    if (!id || !data) return;
    const newData: IProblemUpdateData = { ...data, isActive: !data.isActive };
    longProblemApiWrapper.updateLongProblem(id, newData).then(() => {
      refetch();
    });
  }

  return (
    <PageTemplate>
      <Typography variant='h4'>{data?.title}</Typography>
      <Divider sx={{ my: 2 }} />
      <DetailTitle>카테고리</DetailTitle>
      <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
        {data?.tags.map((id) => (
          <Box key={id}>{TAGS.find((e) => e.id === id)?.name}</Box>
        ))}
      </Box>
      <Divider sx={{ my: 2 }} />
      <DetailTitle>문제 설명</DetailTitle>
      <MarkdownCard>{data?.description}</MarkdownCard>
      <Divider sx={{ my: 2 }} />
      <DetailTitle>모범답안</DetailTitle>
      {data?.standardAnswers.map((answer) => (
        <MarkdownCard key={answer}>{answer}</MarkdownCard>
      ))}
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
        <FormGroup>
          <FormControlLabel
            checked={data?.isActive}
            control={<Switch checked={data?.isActive ?? false} />}
            label='활성화 여부'
            onClick={handleProblemActivate}
          />
        </FormGroup>
        <Link to={URLWithParam.LONG_PROBLEM_EDIT(id!)}>
          <Button variant='contained'>수정</Button>
        </Link>
      </Box>
    </PageTemplate>
  );
};
