import { Box, TextField, Typography } from '@mui/material';

interface ITextNumberInput {
  text: string;
  number: number;
  id: string;
  onChange: (event: any) => void;
}

export const TextNumberInput = ({ text, number, id, onChange }: ITextNumberInput) => {
  return (
    <Box sx={{ display: 'flex', my: 1, width: '100%' }} key={id}>
      <TextField
        id={`text-${id}`}
        label='문자 입력란'
        variant='outlined'
        defaultValue={text}
        sx={{ mr: 1, width: '90%' }}
        onChange={onChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id={`number-${id}`}
        label='숫자 입력란'
        type='number'
        defaultValue={number}
        inputProps={{
          min: '0',
          max: '5',
          step: '0.5',
        }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mr: 1, width: '10%' }}
        onChange={onChange}
      />
    </Box>
  );
};
