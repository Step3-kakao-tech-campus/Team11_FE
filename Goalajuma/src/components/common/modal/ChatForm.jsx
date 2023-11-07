import PropTypes from 'prop-types'
import Chat from "./Chat"
// import {ChatTest} from "./ChatTest"
import { ChatInquire } from '@/services/main';
import { useQuery } from '@tanstack/react-query';

const ChatForm = ({id}) => {
  // const dataList = ChatTest.data.comments;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["voteId"],
    queryFn: () => {
      console.log(id);
      return ChatInquire(id);
    },
    enabled: !!id,
  });
  console.log(data)
  const dataList = data?.data.data.comments
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
ChatForm.propTypes = {
  id: PropTypes.number.isRequired
}

export default ChatForm