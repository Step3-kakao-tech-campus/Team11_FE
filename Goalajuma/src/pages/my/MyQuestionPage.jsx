import MainLayout from "../../components/layouts/MainLayout";
import { MyQuestionsData } from "../../components/common/mypage/mypageTestData";
import { MyVoteList } from "../../components/common/mypage/MyVoteList";

const MyQuestionPage = () => {
  const datas = MyQuestionsData.data.votes;
  return (
  <div>
    <MainLayout page="myquestion"/>
    <div>
        {datas &&
          datas.map((data, id) => (
            <>
              <MyVoteList data={data} />
            </>
          ))}
      </div>
  </div>);
};

export default MyQuestionPage;
