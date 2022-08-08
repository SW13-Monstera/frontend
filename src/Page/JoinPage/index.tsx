import DefaultInputBox from '../../Component/Box/InputBox/DefaultInputBox';
import TextButton from '../../Component/Button/TextButton';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { inputListStyle, pageStyle, titleStyle } from './style.css';
import HorizontalOAuthButtonList from '../../Organism/ButtonList/HorizontalOAuthButtonList';
import { INPUT_TYPE } from '../../constants/input';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { IJoinRequest } from '../../types/auth';

function JoinPage() {
  function handleJoin() {
    const joinForm = document.getElementById('join-form') as HTMLFormElement;
    const formData = new FormData(joinForm);
    const data: IJoinRequest = {
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
      username: formData.get('nickname')?.toString() || '',
    };
    console.log(data);
    authApiWrapper.join(data);
  }

  return (
    <>
      <Header />
      <div className={pageStyle}>
        <h1 className={titleStyle}>회원가입</h1>
        <form className={inputListStyle} id='join-form'>
          <label htmlFor='email'>이메일</label>
          <DefaultInputBox
            id='email'
            placeholder='이메일을 입력해주세요'
            type={INPUT_TYPE.EMAIL}
            name='email'
          />
          <label htmlFor='password'>비밀번호</label>
          <DefaultInputBox
            id='password'
            placeholder='비밀번호를 입력해주세요'
            type={INPUT_TYPE.PASSWORD}
            name='password'
          />
          <label htmlFor='password-confirm'>비밀번호 확인</label>
          <DefaultInputBox
            id='password-confirm'
            placeholder='비밀번호를 다시 한번 입력해주세요'
            type={INPUT_TYPE.PASSWORD}
            name='password-confirm'
          />
          <label htmlFor='nickname'>닉네임</label>
          <DefaultInputBox
            id='nickname'
            placeholder='닉네임을 입력해주세요'
            name='nickname'
          ></DefaultInputBox>
          <TextButton
            type={BUTTON_TYPE.SUBMIT}
            theme={BUTTON_THEME.PRIMARY}
            size={BUTTON_SIZE.LARGE}
            onClick={handleJoin}
          >
            회원가입
          </TextButton>
        </form>

        <HorizontalOAuthButtonList>간편 회원가입</HorizontalOAuthButtonList>
      </div>
    </>
  );
}
export default JoinPage;
