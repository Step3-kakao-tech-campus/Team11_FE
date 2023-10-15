// import PropTypes from 'prop-types'
import Img from '../Img'
import styled from "styled-components"; 

const ChatWriteForm = () => {

  const handleUpload = ()=>{
    console.log("upload")
  }

  return (
    <>
    <FormStyled>
      <Img src="맹구.png" size="35px"/>
      <WriteStyled>
        <input type="" placeholder='댓글 작성'/>
        <UploadStyled onClick={handleUpload}>게시</UploadStyled>
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
// const CommentStyled = styled.input`
//   position: relative;
//   left: 5%;
//   top: 15%;
//   font-family: 'Nanum Gothic';
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 16px;
//   color: rgba(41, 85, 197, 0.5);
// `
export default ChatWriteForm