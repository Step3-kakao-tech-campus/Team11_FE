import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  const domain = "ke48313f43733a.user-app.krampoline.com";
  const secureFlag = true;
  console.log(window.location.protocol);
  return cookies.set(name, value, { ...option, domain:domain, secure: secureFlag, sameSite: "None"});
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, option) => {
  return cookies.remove(name, { ...option });
}; 




