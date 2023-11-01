import { instance } from "./index";

export const loginInquire = (data) => {
  const {email, password} = data;

  return instance.post(`/api/auth/login`, {
    email: email,
    password: password
  });
  
};