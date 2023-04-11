import { ChangeEvent, useEffect, useState } from 'react';

export const useMarkdownInput = (defaultValue: string | undefined) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return { value, handleValueChange };
};
