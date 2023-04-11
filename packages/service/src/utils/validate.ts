export const validateEmail = (emailValue: string) => {
  if (emailValue.length <= 0) return true;
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\w{2,3})+$/;
  return re.test(emailValue);
};

export const validatePasswordElements = (passwordValue: string) => {
  if (passwordValue.length <= 0) return true;
  const re = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[A-Za-z\d$@$!%*#?&]{3,}$/;
  return re.test(passwordValue);
};

export const validatePasswordLength = (passwordValue: string) => {
  if (passwordValue.length <= 0) return true;
  return passwordValue.length >= 8 && passwordValue.length <= 32;
};

export const validatePasswordContinuity = (passwordValue: string) => {
  const re = /(\w)\1\1/;
  return !re.test(passwordValue);
};
