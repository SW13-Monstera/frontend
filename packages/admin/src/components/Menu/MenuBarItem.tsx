import { List, Collapse } from '@mui/material';
import { useNestedMenu } from '../../hooks/useNestedMenu';
import { IMenuBarListElement } from '../../types/etc/menu';
import { MenuBarListElement } from './MenuBarListElement';
import { MenuBarTitle } from './MenuBarTitle';

interface IMenuBarItem {
  title: string;
  menuBarListElements: IMenuBarListElement[];
}

export const MenuBarItem = ({ title, menuBarListElements }: IMenuBarItem) => {
  const { open, handleClick } = useNestedMenu();
  return (
    <>
      <MenuBarTitle text={title} open={open} handleClick={handleClick} />
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {menuBarListElements.map((e) => (
            <MenuBarListElement text={e.text} icon={e.icon} url={e.url} key={e.text} />
          ))}
        </List>
      </Collapse>
    </>
  );
};
