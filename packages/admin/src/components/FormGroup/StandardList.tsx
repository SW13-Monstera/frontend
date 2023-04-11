import { Typography, Button, Box } from '@mui/material';
import { ChangeEvent, MouseEvent } from 'react';
import { IStandardResponse } from '../../types/problem/api';
import { DeleteButton } from '../Button/DeleteButton';
import { TextNumberInput } from './TextNumberInput';

interface IStandardList {
  type: string;
  title: string;
  standards: IStandardResponse[];
  handleStandardChange: (event: ChangeEvent<HTMLInputElement>) => void;
  addStandard: () => void;
  deleteStandard: (event: MouseEvent) => void;
}

export const StandardList = ({
  type,
  title,
  standards,
  handleStandardChange,
  addStandard,
  deleteStandard,
}: IStandardList) => {
  return (
    <>
      <Typography>{title}</Typography>
      {standards.map(({ content, score, id }) => (
        <Box sx={{ display: 'flex', gap: 1, width: '100%' }} key={id}>
          <TextNumberInput
            text={content}
            number={score}
            id={id.toString()}
            key={id}
            onChange={handleStandardChange}
          />
          <DeleteButton id={id.toString()} onClick={deleteStandard} />
        </Box>
      ))}
      <Button variant='contained' sx={{ mt: 2 }} onClick={addStandard}>
        추가
      </Button>
    </>
  );
};
