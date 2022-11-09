import Modal from 'react-modal';
import { authApiWrapper } from '../../../../api/wrapper/auth/authApiWrapper';
import LoginForm from '../../../../Organism/LoginForm';
import { setUserInfo } from '../../../../utils/userInfo';
import { modalStyle } from './style.css';

Modal.setAppElement('#root');

interface IModal {
  isModalOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

function LoginModal({ isModalOpen, closeModal }: IModal) {
  const handleSubmit = () => {
    const emailValue = (document.getElementById('email') as HTMLInputElement)?.value;
    const passwordValue = (document.getElementById('password') as HTMLInputElement)?.value;

    if (!emailValue || !passwordValue) return;

    return authApiWrapper
      .login({
        email: emailValue,
        password: passwordValue,
      })
      .then(
        (res) => {
          setUserInfo(res);
          return true;
        },
        (err) => false,
      );
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
