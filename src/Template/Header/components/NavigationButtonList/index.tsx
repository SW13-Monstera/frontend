import { BUTTON_THEME } from '../../../../types/button';
import { headerButtonListStyle } from '../../style.css';
import { URL } from '../../../../constants/url';
import { NavigateProblemListButton } from '../../../../Component/Button/NavigateProblemListButton';
import { RowBox } from '../../../../Component/Box/CustomBox';

export const NavigationButtonList = () => {
  return (
    <RowBox className={headerButtonListStyle}>
      <NavigateProblemListButton
        mainText='모든문제'
        subText='바로가기'
        theme={BUTTON_THEME.PRIMARY}
        link={URL.PROBLEM_LIST}
      />
      <NavigateProblemListButton
        mainText='면접대비'
        subText='세트문제'
        theme={BUTTON_THEME.SECONDARY}
        link={URL.PROBLEM_SET_LIST}
      />
    </RowBox>
  );
};
