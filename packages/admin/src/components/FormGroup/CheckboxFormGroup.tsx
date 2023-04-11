import { FormGroup, Checkbox, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface ICheckboxFormGroup {
  isChecked?: boolean;
  text?: string;
  id?: number;
  handleChoiceChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxFormGroup = ({
  isChecked,
  text,
  id,
  handleChoiceChange,
}: ICheckboxFormGroup) => {
  return (
    <FormGroup sx={{ display: 'flex', flexDirection: 'row', width: '100% ', m: 2 }}>
      <Checkbox
        checked={isChecked}
        className='checkbox'
        id={`checkbox-${id}`}
        onChange={handleChoiceChange}
      />
      <TextField
        defaultValue={text}
        sx={{ width: '90% ' }}
        placeholder='선택지 내용'
        className='textfield'
        id={`textfield-${id}`}
        onChange={handleChoiceChange}
      />
    </FormGroup>
  );
};
