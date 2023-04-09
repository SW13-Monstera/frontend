import { Typography } from '@mui/material';

interface IDetailTitle {
  children: string;
}

export const DetailTitle = ({ children }: IDetailTitle) => {
  return (
    <Typography color='text.secondary' sx={{ fontSize: 12 }}>
      {children}
    </Typography>
  );
};
