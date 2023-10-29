import {atom, selector} from "recoil";

export const sortState = atom({
  key: "sortState",
  default: "current",
});

export const sortNameState = atom({
  key: "sortNameState",
  default: "최신순",
});

export const segmentState = atom({
  key: "segmentState",
  default: "total",
});

export const segmentNameState = atom({
  key: "segmentNameState",
  default: "골라조",
});

export const totalCategoryState = selector({
  key: "totalCategoryState",
  get: ({get}) => {
    return{
      sort : get(sortState),
      content : get(segmentState)
    };
  }
})