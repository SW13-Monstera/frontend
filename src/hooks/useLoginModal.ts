import { useState } from 'react';

const useLoginModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return { isLoginModalOpen, openLoginModal, closeLoginModal };
};

export default useLoginModal;
