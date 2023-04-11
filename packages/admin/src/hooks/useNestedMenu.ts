import { useState } from 'react';

export const useNestedMenu = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return { open, handleClick };
};
