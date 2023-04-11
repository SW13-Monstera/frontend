import PageTemplate from '../../../templates/PageTemplate';
import {
  Typography,
  Box,
  Card,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { dataApiWrapper } from '../../../api/wrapper/data/dataApiWrapper';
import { IDataDetailResponseData } from '../../../types/data/api';
import { URL } from '../../../constants/url';

interface ICheckedState {
  id: number;
  checked: boolean;
}

export const ValidatingDataPage = () => {
  const navigate = useNavigate();
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
  const [keywordStandards, setKeywordStandards] = useState<ICheckedState[]>([]);
  const [contentStandards, setContentStandards] = useState<ICheckedState[]>([]);

  const { id: dataId } = useParams();

  function handleKeywordChange(event: ChangeEvent) {
    setKeywordStandards((prev) =>
      prev.map((e) =>
        e.id.toString() === event.target.id ? { id: e.id, checked: !e.checked } : e,
      ),
    );
  }
  function handleContentChange(event: ChangeEvent) {
    setContentStandards((prev) =>
      prev.map((e) =>
        e.id.toString() === event.target.id ? { id: e.id, checked: !e.checked } : e,
      ),
    );
  }

  function postValidatedData() {
    const postData = {
      user_answer_id: data.id.toString(),
      selectedGradingStandardIds: [
        ...keywordStandards.map((e) => (e.checked ? e.id : -1)),
        ...contentStandards.map((e) => (e.checked ? e.id : -1)),
      ].filter((e) => e !== -1),
    };
    const result = confirm('검수 데이터를 제출하시겠습니까?');
    if (result) {
      dataApiWrapper.validatingData(postData);
      navigate(URL.VALIDATING_DATA_LIST);
    }
  }

  useEffect(() => {
    if (!dataId) return;

    dataApiWrapper
      .getDataDetail({
        user_answer_id: dataId,
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    setKeywordStandards(
      data.keywordsGradingStandards.map((e) => {
        return { id: e.id, checked: data.selectedGradingStandards.includes(e.id) };
      }),
    );
    setContentStandards(
      data.contentGradingStandards.map((e) => {
        return { id: e.id, checked: data.selectedGradingStandards.includes(e.id) };
      }),
    );
  }, [data]);

  return (
    <PageTemplate title='AI 데이터 관리'>
      <Typography variant='h4'>[검수] {data.problemTitle}</Typography>
      <Box sx={{ mt: 2 }}>{data.problemDescription}</Box>
      <Card variant='outlined' sx={{ mt: 2, p: 2 }}>
        {data.answer}
      </Card>
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
          <FormLabel component='legend'>키워드 채점 기준</FormLabel>
          <FormGroup>
            {data.keywordsGradingStandards.map((standard) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={keywordStandards.find((e) => e.id === standard.id)?.checked || false}
                    onChange={handleKeywordChange}
                    name={standard.content}
                    id={standard.id.toString()}
                  />
                }
                label={`${standard.content}  |  ${standard.score}점`}
                key={standard.id}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
          <FormLabel component='legend'>내용 채점 기준</FormLabel>
          <FormGroup>
            {data.contentGradingStandards.map((standard) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contentStandards.find((e) => e.id === standard.id)?.checked || false}
                    onChange={handleContentChange}
                    name={standard.content}
                    id={standard.id.toString()}
                  />
                }
                label={`${standard.content}  |  ${standard.score}점`}
                key={standard.id}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
      <Button variant='contained' onClick={postValidatedData}>
        제출
      </Button>
    </PageTemplate>
  );
};
