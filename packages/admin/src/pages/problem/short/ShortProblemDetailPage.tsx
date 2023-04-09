import PageTemplate from '../../../templates/PageTemplate';
import { Typography, Box, Button, Divider } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { URLWithParam } from '../../../constants/url';
import { TAGS } from '../../../constants/tags';
import { IShortProblemDetailResponse } from '../../../types/problem/shortApi';
import { shortProblemApiWrapper } from '../../../api/wrapper/problem/shortProblemApiWrapper';
import { ActivationToggleButton } from '../../../components/Button/ActivationToggleButton';
import { useMutation, useQuery } from 'react-query';
import { MarkdownCard } from '../../../components/Card/MarkdownCard';
import { DetailTitle } from '../../../components/Typography/DetailTitle';

interface IUpdateShortProblemDetail {
  id: string;
  data: IShortProblemDetailResponse;
}

export const ShortProblemDetailPage = () => {
  const { id } = useParams();
  const { data, refetch } = useQuery(
    ['short-problem-detail', id],
    () => shortProblemApiWrapper.getShortProblemDetail({ problem_id: id ?? '' }),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    },
  );

  const { mutate } = useMutation(
    ({ id, data }: IUpdateShortProblemDetail) => {
      return shortProblemApiWrapper.updateShortProblem(id, data);
    },
    {
      onSuccess: () => {
        refetch();
      },
    },
  );

  function handleProblemActivate() {
    if (!id || !data) return;
    const newData: IShortProblemDetailResponse = { ...data, isActive: !data.isActive };
    mutate({ id, data: newData });
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
      <DetailTitle>정답</DetailTitle>
      <Box sx={{ mt: 2 }}>{data?.answer}</Box>
      <Divider sx={{ my: 2 }} />
      <DetailTitle>점수</DetailTitle>
      <Box sx={{ mt: 2, mb: 4 }}>{data?.score}점</Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ActivationToggleButton data={data} onClick={handleProblemActivate} />
        <Link to={URLWithParam.SHORT_PROBLEM_EDIT(id!)}>
          <Button variant='contained'>수정</Button>
        </Link>
      </Box>
    </PageTemplate>
  );
};
