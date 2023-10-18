import { instance } from "./index";

export const mainInquire = (categoryData, pageParam) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?&sort=${sort}&active="active"&category=${content}?page=${pageParam}`
  );
};
