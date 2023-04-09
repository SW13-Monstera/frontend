import { Toolbar, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const CustomTableToolbar = (props: { numSelected?: any }) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    ></Toolbar>
  );
};
