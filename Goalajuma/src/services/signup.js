import { instance } from "./index";

export const signupInquire = (data) => {
  const {name, email, password} = data;

  return instance.post(`/api/auth/signup`, {
    nickname: name,
    email: email,
    password: password
  });
  
};

export const emailCheckInquire = (email) => {
  return instance.post(`/api/auth/email-check`, {email: email});
  
};