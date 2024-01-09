export function setStorage(key: string, value: string | object) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key: string) {
  return localStorage.getItem(key);
}
