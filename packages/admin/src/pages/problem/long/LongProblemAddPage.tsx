import PageTemplate from '../../../templates/PageTemplate';
import {
  Box,
  TextField,
  Divider,
  Button,
  Card,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { TAGS } from '../../../constants/tags';
import { longProblemApiWrapper } from '../../../api/wrapper/problem/longProblemApiWrapper';
import { IProblemCreateData } from '../../../types/problem/api';
import { STANDARD_TYPE } from '../../../constants/standard';
import { useState, ChangeEvent } from 'react';
import { URL } from '../../../constants/url';
import { Link } from 'react-router-dom';
import { StandardList } from '../../../components/FormGroup/StandardList';
import { useStandard } from '../../../hooks/useStandard';
import { MarkdownInputCard } from '../../../components/Card/MarkdownInputCard';

export const LongProblemAddPage = () => {
  const [tagState, setTagState] = useState(
    TAGS.map((tag) => {
      return { id: tag.id, isChecked: false };
    }),
  );
  const {
    standardState: keywordStandardState,
    addStandard: addKeywordStandard,
    deleteStandard: deleteKeywordStandard,
    handleStandardChange: handleKeywordStandardChange,
  } = useStandard(STANDARD_TYPE.KEYWORD);

  const {
    standardState: contentStandardState,
    addStandard: addContentStandard,
    deleteStandard: deleteContentStandard,
    handleStandardChange: handleContentStandardChange,
  } = useStandard(STANDARD_TYPE.CONTENT);

  const handleTagChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setTagState((prev) => [
      ...prev.map((e) => (e.id !== id ? e : { id: id, isChecked: !e.isChecked })),
    ]);
  };

  function createProblem() {
    const data: IProblemCreateData = {
      title: (document.getElementById('title') as HTMLTextAreaElement).value || '',
      description: (document.getElementById('description') as HTMLTextAreaElement).value || '',
      standardAnswer:
        (document.getElementById('standardAnswer') as HTMLTextAreaElement).value || '',
      tags: tagState.filter((tag) => tag.isChecked).map((e) => e.id),
      gradingStandards: [
        ...keywordStandardState.map(({ content, score, type }) => {
          return { content, score, type };
        }),
        ...contentStandardState.map(({ content, score, type }) => {
          return { content, score, type };
        }),
      ],
    };
    longProblemApiWrapper.createLongProblem(data);
  }

  return (
    <PageTemplate>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField id='title' label='문제 제목' variant='outlined' sx={{ my: 2 }} />
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
        <MarkdownInputCard id='standardAnswer' title='모범답안' />
        <Divider sx={{ my: 2 }} />
        <StandardList
          type={STANDARD_TYPE.KEYWORD}
          title='키워드 채점 기준'
          standards={keywordStandardState}
          handleStandardChange={handleKeywordStandardChange}
          addStandard={addKeywordStandard}
          deleteStandard={deleteKeywordStandard}
        />
        <Divider sx={{ my: 2 }} />
        <StandardList
          type={STANDARD_TYPE.CONTENT}
          title='내용 채점 기준'
          standards={contentStandardState}
          handleStandardChange={handleContentStandardChange}
          addStandard={addContentStandard}
          deleteStandard={deleteContentStandard}
        />
      </Box>
      <Link to={URL.LONG_PROBLEM_LIST}>
        <Button variant='contained' sx={{ mt: 2 }} onClick={createProblem}>
          저장
        </Button>
      </Link>
    </PageTemplate>
  );
};
