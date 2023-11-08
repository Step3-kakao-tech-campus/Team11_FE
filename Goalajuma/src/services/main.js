import { instance } from "./index";

export const mainInquire = (categoryData, pageParam) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?&sort=${sort}&category=${content}&page=${pageParam}`
  );
};

export const hotInquire = (pageParam) => {
  return instance.get(`/votes/hot&page=${pageParam}`);
};

export const completeInquire = (categoryData, pageParam) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?active=complete&sort=${sort}&category=${content}&page=${pageParam}`
  );
};

export const detailInquire = (id) => {
  return instance.get(`/votes/${id}`);
};

export const ChatInquire = (id) => {
  return instance.get(`/votes/${id}/comments`);
};

export const closeInquire = (id)=>{
  console.log('메롱',id)
  return instance.patch(`/vote/${id}/close`)
}