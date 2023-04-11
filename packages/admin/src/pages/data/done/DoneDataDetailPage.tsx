import PageTemplate from '../../../templates/PageTemplate';
import { Typography, Box, Card, Button, Divider } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dataApiWrapper } from '../../../api/wrapper/data/dataApiWrapper';
import { IDataDetailResponseData } from '../../../types/data/api';
import { URL } from '../../../constants/url';

export const DoneDataDetailPage = () => {
  const { id: dataId } = useParams();

  const [data, setData] = useState<IDataDetailResponseData>({
    id: 0,
    answer: '',
    isLabeled: false,
    isValidated: false,
    keywordsGradingStandards: [],
    contentGradingStandards: [],
    problemId: 0,
    problemTitle: '',
    problemDescription: '',
    selectedGradingStandards: [],
  });

  useEffect(() => {
    if (!dataId) return;

    dataApiWrapper
      .getDataDetail({
        user_answer_id: dataId,
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <PageTemplate>
      <Typography variant='h4'>[완료] {data.problemTitle}</Typography>
      <Box sx={{ mt: 2 }}>{data.problemDescription}</Box>
      <Card variant='outlined' sx={{ mt: 2, p: 2 }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          유저 답안
        </Typography>
        {data.answer}
      </Card>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
        <Typography variant='h6'>키워드 채점 기준</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
          {data.keywordsGradingStandards.map((standard) => (
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }} key={standard.id}>
              <Typography>{standard.content}</Typography>
              <Typography>{standard.score}</Typography>
            </Box>
          ))}
        </Box>
        <Divider />
        <Typography variant='h6'>내용 채점 기준</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
          {data.contentGradingStandards.map((standard) => (
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }} key={standard.id}>
              <Typography>{standard.content}</Typography>
              <Typography>{standard.score}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Link to={URL.DONE_DATA_LIST}>
        <Button variant='contained' sx={{ my: 2 }}>
          돌아가기
        </Button>
      </Link>
    </PageTemplate>
  );
};
