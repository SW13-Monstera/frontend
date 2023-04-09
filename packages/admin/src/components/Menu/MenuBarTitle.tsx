import { Box, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface IMenuBarTitle {
  text: string;
  open: boolean;
  handleClick: () => void;
}

export const MenuBarTitle = ({ text, open, handleClick }: IMenuBarTitle) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      m: 2,
    }}
    onClick={handleClick}
  >
    <Typography>{text}</Typography>
    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  </Box>
);
