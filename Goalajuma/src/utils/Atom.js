import { atom, selector } from "recoil";

export const isToggleAtom = atom({
  key: "btnState",
  default: false,
});

export const isChoiced = atom({
  key: "isChoiced",
  default: false,
});

// export const toggleResultSelector = selector({
//   key: "toggleResult",
//   get: ({ get }) => {
//     const isToggle = get(isToggleAtom);
//     return isToggle;
//   },
// });
