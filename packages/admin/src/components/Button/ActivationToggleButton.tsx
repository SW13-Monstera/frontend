import { FormControlLabel, Switch } from '@mui/material';

interface IActivationToggleButton {
  data: any;
  onClick: () => void;
}

export const ActivationToggleButton = ({ data, onClick }: IActivationToggleButton) => {
  return (
    <FormControlLabel
      checked={data?.isActive}
      control={<Switch checked={data?.isActive ?? false} />}
      label='활성화 여부'
      onClick={onClick}
    />
  );
};
