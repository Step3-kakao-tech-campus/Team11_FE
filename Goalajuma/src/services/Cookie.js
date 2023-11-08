import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  // const domain = ".user-app.krampoline.com";
  // const secureFlag = window.location.protocol === "https:";
  return cookies.set(name, value, { ...option});
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, option) => {
  return cookies.remove(name, { ...option });
};