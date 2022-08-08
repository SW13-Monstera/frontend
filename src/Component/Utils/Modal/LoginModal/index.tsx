import Modal from 'react-modal';
import { authApiWrapper } from '../../../../api/wrapper/auth/authApiWrapper';
import { USER_INFO } from '../../../../constants/localStorage';
import { useAuthStore } from '../../../../hooks/useStore';
import LoginForm from '../../../../Organism/LoginForm';
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
    authApiWrapper
      .login({
        email: (document.getElementById('email') as HTMLInputElement)?.value || '',
        password: (document.getElementById('password') as HTMLInputElement)?.value || '',
      })
      .then((response) => {
        localStorage.setItem(USER_INFO, JSON.stringify(response));
        setIsLogin();
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
