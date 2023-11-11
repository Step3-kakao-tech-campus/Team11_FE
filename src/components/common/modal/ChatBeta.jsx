import PropTypes from "prop-types";
import Chat from "./Chat";
import { useState } from "react";
import styled from "styled-components";
import Alert from "../Alert";
import { commentInquire, deleteCommentInquire } from "@/services/detailVote";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { ChatInquire } from "@/services/main";
import Swal from "sweetalert2";

const ChatBeta = ({ participate }) => {
  const [write, setWrite] = useState("");
  const [alert, setIsAlert] = useState(false);
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => {
      return ChatInquire(id);
    },
    enabled: !!id,
  });
  const dataList = data?.data.data.comments;

  const addComment = useMutation({
    mutationFn: (newComment) => commentInquire(id, newComment),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", id]);
    },
  });

  const deleteComment = useMutation({
    mutationFn: (uid) => deleteCommentInquire(id, uid),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", id]);
    },
  });

  const handleUpload = () => {
    if (participate) {
      addComment.mutate(write);
      setWrite("");
    } else {
      setIsAlert(true);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleUpload();
    }
  };

  const handleInputChange = (event) => {
    setWrite(event.target.value);
  };

  const handleClick = (uid) => {
    Swal.fire({
      icon: "info",
      html: "댓글을 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
      confirmButtonColor: "#429f50",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteComment
          .mutate(uid)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            alert(err);
          });
      }
    });
  };

  return (
    <>
      {dataList?.map((data, index) => {
        return <Chat key={index} data={data} onClick={handleClick} />;
      })}
      <FormStyled>
        <WriteStyled>
          {alert && (
            <Alert setIsAlert={setIsAlert} positionLeft={`5%`}>
              투표를 해야 댓글 작성이 가능합니다.
            </Alert>
          )}
          <input
            placeholder="댓글 작성"
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            value={write}
          />
          <UploadStyled onClick={handleUpload}>게시</UploadStyled>
        </WriteStyled>
      </FormStyled>
    </>
  );
};
ChatBeta.propTypes = {
  data: PropTypes.object.isRequired,
  participate: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  position: fixed;
  bottom: 10%;
  z-index: 900;
`;
const WriteStyled = styled.div`
  position: relative;
  top: 30px;
  width: 238px;
  height: 27px;
  border: 1px solid #9eb0ea;
  border-radius: 72px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 10px;
  background-color: #fff;

  input {
    border: none;
    background-color: #fff;
    width: 210px;
    left: 10%;
    top: 15%;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    padding-inline: 0;
    padding-block: 0;
    border-radius: 72px;
    &:focus {
      outline: none;
    }
  }
`;
const UploadStyled = styled.button`
  width: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #2955c5;
  border: none;
  padding-inline: 0;
  padding-block: 0;
  background-color: #fff;
`;
export default ChatBeta;
