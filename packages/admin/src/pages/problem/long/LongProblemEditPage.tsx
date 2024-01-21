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
import { useParams } from 'react-router-dom';
import { TAGS } from '../../../constants/tags';
import { useDialog } from '../../../hooks/useDialog';
import { WarningDialog } from '../../../components/Dialog/WarningDialog';
import { useState, useEffect, ChangeEvent } from 'react';
import { IProblemDetailResponse, IProblemUpdateData } from '../../../types/problem/api';
import { longProblemApiWrapper } from '../../../api/wrapper/problem/longProblemApiWrapper';
import { MarkdownInputCard } from '../../../components/Card/MarkdownInputCard';
import InputList from '../../../components/FormGroup/InputList';
import { useList } from '../../../hooks/useList';

export const LongProblemEditPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<IProblemDetailResponse | null>(null);
  const {
    ids: answerIds,
    addItem: addAnswer,
    deleteItem: deleteAnswer,
  } = useList(data?.standardAnswers.length, 1, 5);
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
    if (!id) return;
    longProblemApiWrapper.getLongProblemDetail({ problem_id: id }).then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    if (!data) return;
    setTagState(
      TAGS.map((tag) => {
        return { id: tag.id, isChecked: data.tags.includes(tag.id) };
      }),
    );
  }, [data]);

  function editProblem() {
    if (!id || !data) return;
    const newData: IProblemUpdateData = {
      ...data,
      title: (document.getElementById('title') as HTMLTextAreaElement).value || '',
      description: (document.getElementById('description') as HTMLTextAreaElement).value || '',
      standardAnswers:
        Array.from(
          document.getElementsByClassName('standard-answer') as HTMLCollectionOf<HTMLInputElement>,
        )
          .filter((e) => !e.ariaHidden)
          .map((e) => e.value) || [],
      tags: tagState.filter((tag) => tag.isChecked).map((e) => e.id),
      // [TODO] AI 관련 속성 API에서 삭제시 함께 삭제
      gradingStandards: [],
    };
    longProblemApiWrapper.updateLongProblem(id, newData);
  }

  const { isDialogOpen, handleDialogOpen, handleDialogClose } = useDialog();

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
        <MarkdownInputCard
          title='문제 설명'
          id='description'
          defaultValue={data?.description}
          className='description'
        />
        <InputList
          title='모범 답안'
          ids={answerIds}
          addItem={addAnswer}
          deleteItem={deleteAnswer}
          defaultValue={data?.standardAnswers}
          className='standard-answer'
        />
      </Box>
      <Button variant='contained' sx={{ mt: 2 }} onClick={handleDialogOpen}>
        수정
      </Button>
      <WarningDialog isOpen={isDialogOpen} handleClose={handleDialogClose} onClick={editProblem} />
    </PageTemplate>
  );
};
