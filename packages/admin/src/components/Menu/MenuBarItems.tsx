import ShortTextIcon from '@mui/icons-material/ShortText';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LabelIcon from '@mui/icons-material/Label';
import SearchIcon from '@mui/icons-material/Search';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewListIcon from '@mui/icons-material/ViewList';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { URL } from '../../constants/url';
import { MenuBarItem } from './MenuBarItem';

const MENU_BAR_ITEMS = [
  {
    title: '문제 관리',
    menuBarListElements: [
      { text: '서술형', icon: <StickyNote2Icon />, url: URL.LONG_PROBLEM_LIST },
      { text: '단답형', icon: <ShortTextIcon />, url: URL.SHORT_PROBLEM_LIST },
      { text: '객관식', icon: <FormatListNumberedIcon />, url: URL.MULTIPLE_PROBLEM_LIST },
      { text: '문제 세트', icon: <ViewListIcon />, url: URL.PROBLEM_SET_LIST },
    ],
  },
  {
    title: 'AI 데이터 관리',
    menuBarListElements: [
      { text: '라벨링', icon: <LabelIcon />, url: URL.LABELING_DATA_LIST },
      { text: '검수', icon: <SearchIcon />, url: URL.VALIDATING_DATA_LIST },
      { text: '완료', icon: <DoneAllIcon />, url: URL.DONE_DATA_LIST },
    ],
  },
  {
    title: '사용자 관리',
    menuBarListElements: [
      { text: '전체 사용자', icon: <PeopleAltIcon />, url: URL.USER },
      { text: '알림 생성', icon: <NotificationsIcon />, url: URL.NOTICE_CREATE },
    ],
  },
];

export const MenuBarItems = () => {
  return (
    <>
      {MENU_BAR_ITEMS.map((menuBarItem) => (
        <MenuBarItem
          title={menuBarItem.title}
          menuBarListElements={menuBarItem.menuBarListElements}
          key={menuBarItem.title}
        />
      ))}
    </>
  );
};
