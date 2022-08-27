export const setStorageApi = (storageKey: string, storageValue: any) => {
  localStorage.setItem(storageKey, storageValue);
};
export const getStorageApi = (keyStorage: string) => {
  return localStorage.getItem(keyStorage);
};
export const removeStorageApi = (keyStorage: string) => {
  localStorage.removeItem(keyStorage);
};
