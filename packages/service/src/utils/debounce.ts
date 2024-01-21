let timerId: number | ReturnType<typeof setTimeout>;

export const debounce = (func: (value: string) => void, value: string, delay: number) => {
  clearTimeout(timerId);
  timerId = window.setTimeout(() => {
    func(value);
  }, delay);
};
