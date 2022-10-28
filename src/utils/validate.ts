export const validateEmail = (emailValue: string) => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\w{2,3})+$/;
  return re.test(emailValue);
};

export const validatePasswordElements = (passwordValue: string) => {
  const re = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[A-Za-z\d$@$!%*#?&]{3,}$/;
  return re.test(passwordValue);
};

export const validatePasswordLength = (passwordValue: string) => {
  return passwordValue.length >= 8 && passwordValue.length <= 32;
};

export const validatePasswordContinuity = (passwordValue: string) => {
  const re = /(\w)\1\1/;
  return !re.test(passwordValue);
};
