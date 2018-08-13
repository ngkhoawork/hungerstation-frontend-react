export const clearAll = () => {
  localStorage.clear();
};

export const clearStorageItem = key => {
  localStorage.removeItem(key);
};

export const setStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getItem = key => {
  localStorage.getItem(key);
};
