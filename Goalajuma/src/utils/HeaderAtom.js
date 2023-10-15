import {atom, selector} from "recoil";

export const sortState = atom({
  key: "sortState",
  default: "latest",
});

export const segmentState = atom({
  key: "segmentState",
  default: "total",
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