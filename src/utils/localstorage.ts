interface IItemWithExpiry {
  value: string;
  expiry: number;
}

const setItemWithExpiry = (key: string, value: string, time = 259200000) => {
  const now = new Date();

  const item: IItemWithExpiry = {
    value: value,
    expiry: now.getTime() + time,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

const getItemWithExpiry = (key: string) => {
  const itemString = localStorage.getItem(key);
  if (!itemString) return null;

  const item: IItemWithExpiry = JSON.parse(itemString);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const localStorageWithExpiry = {
  setItem: setItemWithExpiry,
  getItem: getItemWithExpiry,
};
