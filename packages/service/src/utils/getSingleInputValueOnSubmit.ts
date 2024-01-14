import { FormEvent } from 'react';

export const getSingleInputValueOnSubmit = (e: FormEvent<HTMLFormElement>, inputId: string) => {
  e.preventDefault();
  const formElement = e.target as HTMLFormElement;
  const data = new FormData(formElement);
  const inputValue = data.get(inputId)?.toString();
  return inputValue;
};
