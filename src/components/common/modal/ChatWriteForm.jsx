import PropTypes from "prop-types";
import { useState } from "react";
import Img from "@/components/common/Img";
import styled from "styled-components";
import Alert from "../Alert";
import { commentInquire } from "@/services/detailVote";
import { useMutation } from "react-query";
import { useParams } from "react-router";

/**
 * @param {object} props
 * @param {boolean} props.participate 투표 참여 여부
 */

const ChatWriteForm = ({ participate }) => {
  const [write, setWrite] = useState("");
  const [alert, setIsAlert] = useState(false);
  const id = useParams();

  const AddComment = () => {
    return useMutation(commentInquire(id.id, write));
  };
  const handleUpload = () => {
    AddComment();
    setWrite("");
  };
  const handleInputChange = (event) => {
    {
      participate ? setWrite(event.target.value) : setIsAlert(true);
    }
  };

  return (
    <>
      <FormStyled>
        <Img src="맹구.png" size="35px" />
        <WriteStyled>
          {alert && (
            <Alert positionLeft="5%" setIsAlert={setIsAlert}>
              투표를 해야 댓글 작성이 가능합니다.
            </Alert>
          )}
          <input
            placeholder="댓글 작성"
            onChange={handleInputChange}
            value={write}
          />
          <UploadStyled onClick={handleUpload}>게시</UploadStyled>
        </WriteStyled>
      </FormStyled>
    </>
  );
};
ChatWriteForm.propTypes = {
  participate: PropTypes.bool.isRequired,
};

const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
`;
const WriteStyled = styled.div`
  position: relative;
  top: 30px;
  width: 230px;
  height: 27px;
  border: 0.7px solid #9eb0ea;
  border-radius: 72px;
  display: flex;
  flex-direction: row;

  input {
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
`;
const UploadStyled = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #2955c5;
  border: none;
  background-color: transparent;
`;
export default ChatWriteForm;
