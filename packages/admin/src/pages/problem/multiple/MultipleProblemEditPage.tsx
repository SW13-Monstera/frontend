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
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { TAGS } from '../../../constants/tags';
import { useState, useEffect, ChangeEvent } from 'react';
import { URL } from '../../../constants/url';
import { IMultipleCreateRequest } from '../../../types/problem/multipleApi';
import { multipleProblemApiWrapper } from '../../../api/wrapper/problem/multipleProblemApiWrapper';
import { CheckboxFormGroup } from '../../../components/FormGroup/CheckboxFormGroup';
import { DeleteButton } from '../../../components/Button/DeleteButton';
import { useChoice } from '../../../hooks/useChoice';
import { useQuery } from 'react-query';
import { MarkdownInputCard } from '../../../components/Card/MarkdownInputCard';

export const MultipleProblemEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(
    ['multiple-problem-detail', id],
    () => multipleProblemApiWrapper.getMultipleProblemDetail({ problem_id: id ?? '' }),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    },
  );

  const [score, setScore] = useState<number | null>(0);
  const [tagState, setTagState] = useState(
    TAGS.map((tag) => {
      return { id: tag.id, isChecked: false };
    }),
  );

  const { choiceState, setChoiceState, addChoiceId, handleChoiceChange, addChoice, deleteChoice } =
    useChoice();

  const handleTagChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setTagState((prev) => [
      ...prev.map((e) => (e.id !== id ? e : { id: id, isChecked: !e.isChecked })),
    ]);
  };

  useEffect(() => {
    if (!data) return;

    setTagState(
      TAGS.map((tag) => {
        return { id: tag.id, isChecked: data.tags.includes(tag.id) };
      }),
    );
    setChoiceState(
      data.choiceData.map((choice, idx) => {
        addChoiceId();
        return { ...choice, id: idx };
      }),
    );
    setScore(data.score);
  }, [data]);

  function editProblem() {
    if (!id) return;
    const data: IMultipleCreateRequest = {
      title: (document.getElementById('title') as HTMLTextAreaElement).value || '',
      description: (document.getElementById('description') as HTMLTextAreaElement).value || '',
      tags: tagState.filter((tag) => tag.isChecked).map((e) => e.id),
      choices: choiceState.map((choice) => {
        return { isAnswer: choice.isAnswer, content: choice.content };
      }),
      score: parseInt((document.getElementById('score') as HTMLTextAreaElement).value) || 0,
    };
    multipleProblemApiWrapper.updateMultipleProblem(id, data);
    navigate(URL.MULTIPLE_PROBLEM_LIST);
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
        <MarkdownInputCard id='description' title='문제 설명' defaultValue={data?.description} />
        <Typography sx={{ fontSize: '1rem' }}>선택지</Typography>
        <Card
          id='choices'
          variant='outlined'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'transparent',
            borderColor: '#0000003B',
            width: '100%',
          }}
        >
          {choiceState.map((choice) => (
            <Box
              key={choice.id}
              sx={{
                display: 'flex',
                px: 1,
              }}
            >
              <CheckboxFormGroup
                isChecked={choice.isAnswer}
                text={choice.content}
                id={choice.id}
                handleChoiceChange={handleChoiceChange}
              />
              <DeleteButton id={choice.id.toString()} onClick={deleteChoice} />
            </Box>
          ))}
          <Button variant='contained' sx={{ m: 2 }} onClick={addChoice}>
            추가
          </Button>
        </Card>
        <TextField
          id='score'
          label='점수'
          type='number'
          value={score ?? 0}
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            min: '0',
            step: '0.5',
          }}
          onChange={(event) => {
            const value = event.target.value;
            setScore(value ? parseFloat(value) : null);
          }}
        />
      </Box>
      <Button variant='contained' sx={{ mt: 2 }} onClick={editProblem}>
        수정
      </Button>
    </PageTemplate>
  );
};
