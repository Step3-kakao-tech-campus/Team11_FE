import { instance } from "./index";

export const mainInquire = (categoryData, pageParam) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?&sort=current&category=${content}&page=${pageParam}`
  );
};

export const hotInquire = (pageParam) => {
  return instance.get(`/votes/hot&page=${pageParam}`);
};

export const completeInquire = (categoryData, pageParam) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?active=complete&sort=current&category=${content}&page=${pageParam}`
  );
};
