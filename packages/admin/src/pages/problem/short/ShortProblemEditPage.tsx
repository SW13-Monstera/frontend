import PageTemplate from '../../../templates/PageTemplate';
import {
  Box,
  TextField,
  Button,
  Card,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { TAGS } from '../../../constants/tags';
import { useState, useEffect, ChangeEvent } from 'react';
import { URL } from '../../../constants/url';
import { shortProblemApiWrapper } from '../../../api/wrapper/problem/shortProblemApiWrapper';
import { ICreateShortProblemRequest } from '../../../types/problem/shortApi';
import { useQuery } from 'react-query';
import { MarkdownInputCard } from '../../../components/Card/MarkdownInputCard';

export const ShortProblemEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(['short-problem-detail', id], () =>
    shortProblemApiWrapper.getShortProblemDetail({ problem_id: id ?? '' }),
  );

  const [tagState, setTagState] = useState(
    TAGS.map((tag) => {
      return { id: tag.id, isChecked: false };
    }),
  );

  const handleTagChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setTagState((prev) => [
      ...prev.map((e) => (e.id !== id ? e : { id: id, isChecked: !e.isChecked })),
    ]);
  };

  useEffect(() => {
    setTagState(
      TAGS.map((tag) => {
        return { id: tag.id, isChecked: data?.tags.includes(tag.id) ?? false };
      }),
    );
  }, [data]);

  function editProblem() {
    if (!id) return;
    const data: ICreateShortProblemRequest = {
      title: (document.getElementById('title') as HTMLTextAreaElement).value || '',
      description: (document.getElementById('description') as HTMLTextAreaElement).value || '',
      tags: tagState.filter((tag) => tag.isChecked).map((e) => e.id),
      answer: (document.getElementById('answer') as HTMLTextAreaElement).value || '',
      score: parseInt((document.getElementById('score') as HTMLTextAreaElement).value) || 0,
    };
    shortProblemApiWrapper.updateShortProblem(id, data);
    navigate(URL.SHORT_PROBLEM_LIST);
  }

  return (
    <PageTemplate>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          id='title'
          label='문제 제목'
          multiline
          defaultValue={data?.title}
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <Card variant='outlined' sx={{ backgroundColor: 'transparent', borderColor: '#0000003B' }}>
          <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ my: 3 }} component='fieldset' variant='standard'>
              <FormGroup aria-label='tag choices' row>
                {TAGS.map((tag) => (
                  <FormControlLabel
                    labelPlacement='top'
                    control={
                      <Checkbox
                        checked={tagState.find((e) => e.id === tag.id)?.isChecked}
                        onChange={handleTagChange}
                        name={tag.name}
                        id={tag.id}
                      />
                    }
                    label={tag.name}
                    key={tag.id}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>
        </Card>
        <MarkdownInputCard title='문제 설명' id='description' defaultValue={data?.description} />
        <TextField
          id='answer'
          label='정답'
          multiline
          rows={4}
          defaultValue={data?.answer}
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id='score'
          label='점수'
          type='number'
          defaultValue={data?.score}
          sx={{ my: 2 }}
          inputProps={{
            min: '0',
            step: '0.5',
          }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Button variant='contained' sx={{ mt: 2 }} onClick={editProblem}>
        수정
      </Button>
    </PageTemplate>
  );
};
