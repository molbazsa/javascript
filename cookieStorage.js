import { camelToDashed as dashed } from "./utils.js";

const cookieStorage = {
  setItem: (key, value, options = {}) => {
    document.cookie = [
      `${key}=${value}`,
      ...Object.entries(options).map(([optionKey, optionValue]) => {
        return `${dashed(optionKey)}=${optionValue}`;
      }),
    ].join("; ");
  },

  getItem: (key) => {
    const value = document.cookie.split("; ").find((value) => {
      return value.split("=")[0] === key;
    });
    if (value === undefined) {
      return undefined;
    } else {
      return value.split("=")[1];
    }
  },

  deleteItem: (key) => {
    document.cookie = `${key}=; max-age=0`;
  },
};

export default cookieStorage;
