import Modal from 'react-modal';
import LoginForm from '../../../../Organism/LoginForm';
import { modalStyle } from './style.css';

Modal.setAppElement('#root');

interface IModal {
  isModalOpen: boolean;
  closeModal: () => void;
  children?: JSX.Element | string;
}

function LoginModal({ isModalOpen, closeModal }: IModal) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      contentLabel='Login Modal'
    >
      <LoginForm closeModal={closeModal} />
    </Modal>
  );
}
export default LoginModal;
