import { instance } from "./index";

export const mainInquire = (categoryData, pageParam) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?&sort=current&category=${content}&page=${pageParam}`
  );
};
