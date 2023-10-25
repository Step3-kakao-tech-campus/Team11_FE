import { atom, selector } from "recoil";

export const keyState = atom({
  key: "searchState",
  default: "",
});

// export const totalCategoryState = selector({
//   key: "searchSelector",
//   get: ({ get }) => {
//     return { searchQuery: get(keyState) };
//   },
// });
