export const validateEmail = (emailValue: string) => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\w{2,3})+$/;
  return re.test(emailValue);
};
