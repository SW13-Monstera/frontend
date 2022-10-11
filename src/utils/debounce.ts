let timerId: number | undefined;

export const debounce = (func: (value: string) => void, value: string, delay: number) => {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    func(value);
  }, delay);
};
