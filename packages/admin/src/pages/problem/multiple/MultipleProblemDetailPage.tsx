import PageTemplate from '../../../templates/PageTemplate';
import { Typography, Box, Button, Divider } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { URLWithParam } from '../../../constants/url';
import { TAGS } from '../../../constants/tags';
import { IMultipleUpdateRequest } from '../../../types/problem/multipleApi';
import { multipleProblemApiWrapper } from '../../../api/wrapper/problem/multipleProblemApiWrapper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useMutation, useQuery } from 'react-query';
import { ActivationToggleButton } from '../../../components/Button/ActivationToggleButton';
import { DetailTitle } from '../../../components/Typography/DetailTitle';
import { MarkdownCard } from '../../../components/Card/MarkdownCard';

interface IUpdateMultipleProblemDetail {
  id: string;
  data: IMultipleUpdateRequest;
}

export const MultipleProblemDetailPage = () => {
  const { id } = useParams();
  const { data, refetch } = useQuery(
    ['multiple-problem-detail', id],
    () => multipleProblemApiWrapper.getMultipleProblemDetail({ problem_id: id ?? '' }),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    },
  );
  const { mutate } = useMutation(
    ({ id, data }: IUpdateMultipleProblemDetail) => {
      return multipleProblemApiWrapper.updateMultipleProblem(id, data);
    },
    {
      onSuccess: () => {
        refetch();
      },
    },
  );

  function handleProblemActivate() {
    if (!id || !data) return;

    const newData: IMultipleUpdateRequest = {
      ...data,
      isActive: !data.isActive,
      choices: data.choiceData,
    };

    delete newData.choiceData;
    delete newData.id;
    delete newData.isMultiple;

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
      <DetailTitle>선택지</DetailTitle>
      <Box sx={{ mt: 2 }}>
        {data?.choiceData.map((choice, idx) => (
          <Box key={choice.content + idx} sx={{ display: 'flex', alignItems: 'center' }}>
            {choice.isAnswer ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            {choice.content}
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 2 }} />
      <DetailTitle>점수</DetailTitle>
      <Box sx={{ mt: 2, mb: 4 }}>{data?.score}점</Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ActivationToggleButton data={data} onClick={handleProblemActivate} />
        <Link to={URLWithParam.MULTIPLE_PROBLEM_EDIT(id!)}>
          <Button variant='contained'>수정</Button>
        </Link>
      </Box>
    </PageTemplate>
  );
};
