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
import { TAGS } from '../../../constants/tags';
import { useState, ChangeEvent } from 'react';
import { URL } from '../../../constants/url';
import { Link } from 'react-router-dom';
import { ICreateShortProblemRequest } from '../../../types/problem/shortApi';
import { shortProblemApiWrapper } from '../../../api/wrapper/problem/shortProblemApiWrapper';
import { MarkdownInputCard } from '../../../components/Card/MarkdownInputCard';

export const ShortProblemAddPage = () => {
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

  function createProblem() {
    const data: ICreateShortProblemRequest = {
      title: (document.getElementById('title') as HTMLTextAreaElement).value || '',
      description: (document.getElementById('description') as HTMLTextAreaElement).value || '',
      tags: tagState.filter((tag) => tag.isChecked).map((e) => e.id),
      answer: (document.getElementById('answer') as HTMLTextAreaElement).value || '',
      score: parseInt((document.getElementById('score') as HTMLTextAreaElement).value) || 0,
    };
    shortProblemApiWrapper.createShortProblem(data);
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
          variant='outlined'
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
        <MarkdownInputCard id='description' title='문제 설명' />
        <TextField
          id='answer'
          label='정답'
          multiline
          rows={4}
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id='score'
          label='점수'
          type='number'
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Link to={URL.SHORT_PROBLEM_LIST}>
        <Button variant='contained' sx={{ mt: 2 }} onClick={createProblem}>
          저장
        </Button>
      </Link>
    </PageTemplate>
  );
};
