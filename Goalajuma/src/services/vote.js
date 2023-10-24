import { instance } from "./index";

export const vote = (id) => {
  return instance.post(`/votes/participate/options/${id}`);
};

export const voteChange = (id) => {
  return instance.put(`/votes/participate/options/${id}`);
};

export const uploadVote = (count) => {
  return instance.post(`/votes`, count);
};
