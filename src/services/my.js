import { instance } from "./index";

export const myInquire = () => {
  return instance.get("/users/profile");
};

export const participateInquire = () => {
  return instance.get(`/users/votes/participate`);
};

export const myvoteInquire = () => {
  return instance.get(`/users/votes/ask`);
};

export const newNameInquire = (payload) => {
  return instance.patch("/users/nickname", {
    nickname: payload,
  });
};

export const newEmailInquire = (payload) => {
  return instance.patch("/users/email", {
    email: payload,
  });
};
