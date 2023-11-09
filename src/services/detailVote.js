import { instance } from ".";

export const commentInquire = (id, comment) => {
  console.log(id, comment)
  return instance.post(`/votes/${id}/comments`, {
    content: comment
  });
}

export const deleteCommentInquire = (id, cid) => {
  return instance.delete(`/votes/${id}/comments/${cid}`)
}