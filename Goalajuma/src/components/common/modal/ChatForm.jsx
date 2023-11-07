import PropTypes from "prop-types";
import Chat from "./Chat";
// import {ChatTest} from "./ChatTest"
import { ChatInquire } from "@/services/main";
import { useQuery } from "@tanstack/react-query";

const ChatForm = ({ data }) => {
  // const dataList = ChatTest.data.comments;

  const dataList = data?.data.data.comments;
  return (
    <>
      {dataList?.map((data, index) => {
        return <Chat key={index} data={data} />;
      })}
    </>
  );
};
ChatForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ChatForm;
