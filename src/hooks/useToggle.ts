import { useState } from 'react';

export const useToggle = () => {
  const [state, setState] = useState(false);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
};
