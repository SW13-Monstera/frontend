import { useMemo, useState } from 'react';

export const usePasswordConfirm = () => {
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('');

  const isPasswordSame = useMemo(() => {
    return passwordValue === passwordConfirmValue;
  }, [passwordValue, passwordConfirmValue]);

  return { passwordValue, setPasswordValue, setPasswordConfirmValue, isPasswordSame };
};
