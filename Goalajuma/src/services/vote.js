import { instance } from "./index";
//투표하기
export const vote = (id) => {
  return instance.post(`/votes/participate/options/${id}`);
};

//투표 옵션 수정
export const changeOption = (voteId, optionId) => {
  return instance.put(`/votes/${voteId}/options/${optionId}`);
};
//글 업로드
export const uploadVote = (count) => {
  return instance.post(`/votes`, count, {
    // headers: { "Content-Type": "multipart/form-data" },
  });
};
//투표 취소
export const deleteVote = (id) => {
  return instance.delete(`/votes/participate/options/${id}`);
};
