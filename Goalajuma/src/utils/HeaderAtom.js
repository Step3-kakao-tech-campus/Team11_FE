import {atom, selector} from "recoil";

export const sortState = atom({
  key: "sortState",
  default: "latest",
});

export const contentState = atom({
  key: "contentState",
  default: "total",
});
