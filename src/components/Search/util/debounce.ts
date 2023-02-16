export const debounce = (callback: any, duration: any) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};
