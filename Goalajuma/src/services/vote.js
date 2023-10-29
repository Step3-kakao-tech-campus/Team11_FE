import { instance } from "./index";

export const vote = (id) => {
  return instance.post(`/votes/participate/options/${id}`);
};

export const voteChange = (voteId, optionId) => {
  return instance.put(`/votes/${voteId}/options/${optionId}`);
};

export const uploadVote = (count) => {
  return instance.post(`/votes`, count);
};

export const deleteVote = (id) => {
  return instance.delete(`/votes/participate/options/${id}`);
};
