import PageTemplate from '../../../templates/PageTemplate';
import {
  Box,
  TextField,
  Button,
  Card,
  Chip,
  Typography,
  Autocomplete,
  CircularProgress,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useMutation, useQuery } from 'react-query';
import { problemSetApiWrapper } from '../../../api/wrapper/problem/problemSetApiWrapper';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IProblemSearchParam,
  ISearchProblemElement,
  TProblemTag,
} from '../../../types/problem/api';
import { PROBLEM_TAG } from '../../../constants/problem';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../../constants/url';

interface IProblem {
  id: number;
  title: string;
}

const MAX_CNT = 5;
const MIN_CNT = 2;

export const ProblemSetAddPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState<IProblemSearchParam>({ tags: [] });
  const [selectedProblems, setSelectedProblems] = useState<IProblem[]>([]);
  const { data: searchOptions } = useQuery(['problem-list', searchParams], () =>
    problemApiWrapper.searchProblem(searchParams),
  );
  const { mutate: submit } = useMutation(
    ['problemset-create'],
    () => problemSetApiWrapper.createProblemSet(createData()),
    {
      onSuccess: () => {
        alert('문제 세트가 생성되었습니다.');
        navigate(URL.PROBLEM_SET_LIST);
      },
    },
  );
  const onSelectChange = (e: SyntheticEvent, value: any) => {
    if (selectedProblems.length >= MAX_CNT) return;
    const { id, title } = value as ISearchProblemElement;
    setSelectedProblems((prev) => [...prev, { id, title }]);
  };

  const onProblemDelete = (e: any) => {
    const problemTitle = e.target.closest('.selected-problem').querySelector('span').innerHTML;
    setSelectedProblems((prev) => prev.filter((problem) => problem.title !== problemTitle));
  };

  const createData = () => {
    if (selectedProblems.length < MIN_CNT) {
      alert(`문제세트의 최소 문제 개수는 ${MIN_CNT}개 입니다.`);
    }
    const data = {
      problemIds: selectedProblems.map((problem) => problem.id),
      name: (document.querySelector('#name') as HTMLInputElement).value ?? '',
      description: (document.querySelector('#description') as HTMLInputElement).value ?? '',
    };
    return data;
  };

  return (
    <PageTemplate>
      <Typography sx={{ fontSize: 24 }}>문제 세트 생성</Typography>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}
      >
        <TextField id='name' label='제목' />
        <TextField id='description' label='설명' sx={{ mt: 2 }} />
        <Card sx={{ p: 2, mt: 2 }}>
          <Typography>문제 목록</Typography>
          <Box sx={{ mt: 1 }}>
            {selectedProblems.map(({ id, title }) => (
              <Chip
                label={title}
                onDelete={onProblemDelete}
                key={id}
                sx={{ mt: 1, mr: 1 }}
                className='selected-problem'
              />
            ))}
          </Box>
          <FormGroup aria-label='tag choices' row>
            {Object.values(PROBLEM_TAG).map((tag) => (
              <FormControlLabel
                labelPlacement='end'
                control={
                  <Checkbox
                    checked={searchParams.tags?.includes(tag)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      if (!searchParams.tags?.includes(tag)) {
                        setSearchParams((prev) => {
                          return {
                            ...prev,
                            tags: Array.from(
                              new Set([...(searchParams.tags ?? []), e.target.name as TProblemTag]),
                            ),
                          };
                        });
                      } else {
                        setSearchParams((prev) => {
                          return {
                            ...prev,
                            tags: prev.tags?.filter((tag) => tag !== e.target.name),
                          };
                        });
                      }
                    }}
                    name={tag}
                    id={tag}
                  />
                }
                label={tag}
                key={tag}
              />
            ))}
          </FormGroup>
          <Autocomplete
            disablePortal
            getOptionLabel={(option) => option.title}
            options={searchOptions?.contents ?? []}
            sx={{ width: 300, mt: 2 }}
            filterOptions={(x) => x}
            onChange={onSelectChange}
            onInputChange={(event, newInputValue) => {
              setSearchParams((prev) => {
                return { ...prev, query: newInputValue };
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='문제 검색'
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {searchOptions?.contents.length === 0 ? (
                        <CircularProgress color='inherit' size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.title}
                </li>
              );
            }}
            componentsProps={{ popper: { placement: 'bottom-start' } }}
          />
        </Card>
      </Box>
      <Button variant='contained' sx={{ mt: 2 }} onClick={() => submit()}>
        저장
      </Button>
    </PageTemplate>
  );
};
