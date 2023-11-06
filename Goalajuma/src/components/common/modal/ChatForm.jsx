// import PropTypes from 'prop-types'
import Chat from "./Chat"
import {ChatTest} from "./ChatTest"

const ChatForm = () => {
  const dataList = ChatTest.data.comments;
  return (
    <>
    {dataList?.map((data, index) =>{
      return (
        <Chat
          key={index}
          data={data} 
        />)
    })}
    </>
  )
}

export default ChatForm