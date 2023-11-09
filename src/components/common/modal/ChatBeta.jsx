import PropTypes from "prop-types";
import Chat from "./Chat";
import { useState } from "react";
import Img from "@/components/common/Img"
import styled from "styled-components"; 
import Alert from "../Alert"
import { commentInquire, deleteCommentInquire} from "@/services/detailVote";
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useParams } from "react-router";
import { ChatInquire } from "@/services/main";
// import { useParams } from "react-router-dom";

const ChatBeta = ({participate}) => {
  const [write, setWrite] = useState("")
  const [alert, setIsAlert] = useState(false)
  const queryClient = useQueryClient();
  const {id} = useParams();

  const {data} = useQuery({
      queryKey: ["comments", id],
      queryFn: () => {
          return ChatInquire(id);
        },
      enabled: !!id,
    }
  )
  const dataList = data?.data.data.comments;

  const addComment = useMutation(
    {
      mutationFn: (newComment) => commentInquire(id, newComment),
      onSuccess: () => {
      queryClient.invalidateQueries(['comments', id]);
      },
  });

  const deleteComment = useMutation(
    {
      mutationFn: (uid) => deleteCommentInquire(id, uid),
      onSuccess: () => {
        queryClient.invalidateQueries(['comments', id]);
      },
    }
  )

  const handleUpload = () => {
    if (participate) {
      addComment.mutate(write); 
      setWrite('');
    } else {
      setIsAlert(true);
    }
  };

  const handleEnterKey = e => {
    if(e.key === "Enter") {
      handleUpload();
    }
  } 

  const handleInputChange = (event) => {
    setWrite(event.target.value);
  };

  const handleClick = (uid) => {
    // switch (e.detail) {
    //   case 1:
    //     console.log("click");
    //     break;
    //   case 2:
    //     deleteComment.mutate(id);
    //     break;
    //   case 3:
    //     console.log("triple click");
    //     break;
    // }
    deleteComment.mutate(uid);
  };

  return (
    <>
      {dataList?.map((data, index) => {
        console.log(data, index);
        return <Chat key={index} data={data} onClick={handleClick}/>;
      })}
      <FormStyled>
      <Img src="맹구.png" size="35px"/>
      <WriteStyled>
        {alert && 
          <Alert setIsAlert={setIsAlert}>투표를 해야 댓글 작성이 가능합니다.</Alert>
        }
        <input placeholder='댓글 작성'onChange={handleInputChange} onKeyDown={handleEnterKey} value={write}/>
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

`
const WriteStyled = styled.div`
  position: relative;
  top: 30px;
  width: 230px;
  height: 27px;
  border: 0.7px solid #9EB0EA;
  border-radius: 72px;
  display: flex;
  flex-direction: row;

  input{
    border: none;
    background-color: transparent;
    width: 165px;
    left: 5%;
    top: 15%;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(41, 85, 197, 0.5);
    padding-left: 15px;
  }
`
const UploadStyled = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #2955C5;
  border: none;
  background-color: transparent;
`
export default ChatBeta;
