import { atom, selector } from "recoil";

export const titleState = atom({
  key: "titleState",
  default: "",
});

export const contentState = atom({
  key: "contentState",
  default: "",
});

export const categoryState = atom({
  key: "categoryState",
  default: "total",
});

export const timeLimitState = atom({
  key: "timeLimitState",
  default: 1440,
});

export const optionState = atom({
  key: "optionState",
  default: [
    { name: "", image: null },
    { name: "", image: null },
  ],
});

export const uploadSelector = selector({
  key: "uploadSelector",
  get: ({ get }) => {
    return {
      title: get(titleState),
      content: get(contentState),
      category: get(categoryState),
      timeLimit: get(timeLimitState),
      options: get(optionState),
    };
  },
  set: ({ set }, value) => {
    return (
      set(titleState, value),
      set(contentState, value),
      set(titleState, value),
      set(categoryState, value),
      set(timeLimitState, value),
      set(optionState, value)
    );
  },
});
