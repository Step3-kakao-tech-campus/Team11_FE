import Profile from "@/components/common/mypage/Profile";
import { MyContainer } from "@/styles/Container";
import MyPageUl from "@/components/common/mypage/MyPageUl";
import MyPageHeader from "@/components/layouts/headers/MyPageHeader";
import Footer from "@/components/layouts/footers/Footer";
import { MainMyData } from "@/components/common/mypage/MyPageData";

const Mypage = () => {
  const datas = MainMyData.data;
  return (
    <div>
      <MyPageHeader/>
      <MyContainer>
        <Profile userName={datas.nickName} email={datas.email} src={datas.image}></Profile>
        <MyPageUl
          votingNumber={datas.participateVoteCount}
          questionNumber={datas.createVoteCount}
        ></MyPageUl>
      </MyContainer>
      <Footer page="mypage"/>
    </div>
  );
};

export default Mypage;
