import MainLayout from "../../components/layouts/MainLayout";
import { MyParticipateData } from "../../components/common/mypage/mypageTestData";
import { MyVoteList } from "../../components/common/mypage/MyVoteList";
const MyParticipatePage = () => {
  const datas = MyParticipateData.data.votes;
  return (
  <div>
    <MainLayout page="myvoted"/>
    <div>
        {datas &&
          datas.map((data) => (
            <>
              <MyVoteList data={data} />
            </>
          ))}
      </div>
  </div>);
};

export default MyParticipatePage;
