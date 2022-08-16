import Modal from 'react-modal';
import { authApiWrapper } from '../../../../api/wrapper/auth/authApiWrapper';
import { useAuthStore } from '../../../../hooks/useStore';
import LoginForm from '../../../../Organism/LoginForm';
import { setUserInfo } from '../../../../utils/userInfo';
import { modalStyle } from './style.css';

Modal.setAppElement('#root');

interface IModal {
  isModalOpen: boolean;
  closeModal: () => void;
  children?: JSX.Element | string;
}

function LoginModal({ isModalOpen, closeModal }: IModal) {
  const { setIsLogin } = useAuthStore();

  const handleSubmit = () => {
    const emailValue = (document.getElementById('email') as HTMLInputElement)?.value;
    const passwordValue = (document.getElementById('password') as HTMLInputElement)?.value;

    if (!emailValue || !passwordValue) return;

    authApiWrapper
      .login({
        email: emailValue,
        password: passwordValue,
      })
      .then((res) => {
        setUserInfo(res);
        setIsLogin(true);
      });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      contentLabel='Login Modal'
    >
      <LoginForm closeModal={closeModal} handleSubmit={handleSubmit} />
    </Modal>
  );
}
export default LoginModal;
