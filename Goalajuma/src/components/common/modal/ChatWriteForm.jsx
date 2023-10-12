// import PropTypes from 'prop-types'
import Img from '../Img'
import styled from "styled-components";

const ChatWriteForm = () => {
  return (
    <>
    <FormStyled>
      <Img src="맹구.png" size="35px"/>
      <WriteStyled>
        <CommentStyled>댓글 작성하기</CommentStyled>
        <UploadStyled>게시</UploadStyled>
      </WriteStyled>
    </FormStyled>
    </>
  )
}

ChatWriteForm.propTypes = {
  
}
const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;

`
const WriteStyled = styled.div`
  position: relative;
  top: 30px;
  width: 282px;
  height: 27px;
  border: 0.717026px solid #9EB0EA;
  border-radius: 71.7026px;
  display: flex;
  flex-direction: row;
  gap: 120px;
`
const UploadStyled = styled.button`
  font-family: 'Nanum Gothic';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #2955C5;
  border: none;
  padding: 0;
  background-color: transparent;
`
const CommentStyled = styled.div`
  position: relative;
  left: 5%;
  top: 15%;
  font-family: 'Nanum Gothic';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(41, 85, 197, 0.5);
`
export default ChatWriteForm