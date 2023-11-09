import PropTypes from 'prop-types'
import Img from '@/components/common/Img'
import styled from "styled-components";

const Chat = ({data}) => {
  // const {
  //   username,
  //   content,
  //   createTime
  // } = data
  return (
    <>
    <ChatStyled>
      <Img src="vv.jpg" size="35px"/>
      <div>
        <UserStyled>
          <NameStyled>{data.username}</NameStyled>
          <DateStyled>{data.createTime}</DateStyled>
        </UserStyled>
        <ContentStyled>{data.content}</ContentStyled>
      </div>
    </ChatStyled>
    </>
  )
}

Chat.propTypes = {
  data: PropTypes.object.isRequired
}
const ChatStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 10px;
`
const UserStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0 13px; 
  gap: 6px;

`
const NameStyled = styled.div`
  position: relative;
  left: 0;
  top: 12px;
  font-family: 'Nanum Gothic';
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
  color: #828282;
`
const DateStyled = styled.div`
  position: relative;
  left: 0;
  top: 10px;
  font-family: 'Nanum Gothic';
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
`
const ContentStyled = styled.div`
  position: relative;
  left: 0;
  top: 0%;
  font-family: 'Nanum Gothic';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #191C1F;
`
export default Chat
