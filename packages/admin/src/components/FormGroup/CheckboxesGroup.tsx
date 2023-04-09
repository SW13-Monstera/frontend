import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IChoice } from '../../types/etc';

interface ICheckboxesGroup {
  title: string;
  choices: IChoice[];
}

export function CheckboxesGroup({ title, choices }: ICheckboxesGroup) {
  const [choicesState, setChoicesState] = React.useState<IChoice[]>([
    { id: '', value: '', isChecked: false },
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, name, checked } = event.target;
    setChoicesState((prev) =>
      prev.map((choice) =>
        choice.id === id ? ({ id, name, isChecked: checked } as unknown as IChoice) : choice,
      ),
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>{title}</FormLabel>
        <FormGroup>
          {choices.map((choice) => (
            <FormControlLabel
              control={
                <Checkbox checked={choice.isChecked} onChange={handleChange} name={choice.value} />
              }
              label={`${choice.value}  |  ${choice.value}점`}
              key={choice.id}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
