import PropTypes from "prop-types";
import Chat from "./Chat";
// import {ChatTest} from "./ChatTest"

const ChatForm = ({ data }) => {
  // const dataList = ChatTest.data.comments;
  console.log(data);
  const dataList = data;
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
