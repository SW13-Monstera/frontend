import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { IMenuBarListElement } from '../../types/etc/menu';

export const MenuBarListElement = ({ text, icon, url = '/' }: IMenuBarListElement) =>
  url === '/' ? (
    <ListItemButton disabled={true}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : ''}
      <ListItemText primary={text} />
    </ListItemButton>
  ) : (
    <Link to={url}>
      <ListItemButton>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : ''}
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
