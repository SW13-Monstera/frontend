import Modal from 'react-modal';
import { IModal } from '../../../../types/util';
import { modalStyle } from './style.css';

export const CustomModal = ({ isModalOpen, closeModal, children }: IModal) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyle}>
      {children}
    </Modal>
  );
};
