import DefaultInputBox from '../../Component/Box/InputBox/DefaultInputBox';
import TextButton from '../../Component/Button/TextButton';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { descStyle, pageStyle, titleStyle } from './style.css';

function NicknamePage() {
  return (
    <>
      <Header />
      <div className={pageStyle}>
        <label htmlFor='nickname' className={titleStyle}>
          닉네임 설정
        </label>
        <div className={descStyle}>
          <p>서비스 내에서 사용할 닉네임을 입력해주세요.</p>
          <p>추후에 마이페이지에서 변경 가능합니다.</p>
        </div>
        <DefaultInputBox id='nickname' placeholder='닉네임을 입력해주세요'></DefaultInputBox>
        <TextButton type={BUTTON_TYPE.SUBMIT} theme={BUTTON_THEME.PRIMARY} size={BUTTON_SIZE.LARGE}>
          설정
        </TextButton>
      </div>
    </>
  );
}
export default NicknamePage;
