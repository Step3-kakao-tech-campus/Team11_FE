import Profile from "../../components/common/mypage/Profile";
import { MyContainer } from "../../styles/Container";
import MyPageUl from "../../components/common/mypage/MyPageUl";
import MainLayout from "../../components/layouts/MainLayout";

const Mypage = () => {
  let votingNumber = 3;
  let questionNumber = 2;
  let userName = "김코딩";
  let email = "kkj@naver.com";
  let src = "vv.jpg";
  return (
    <div>
      <MainLayout page="mypage"/>
      <MyContainer>
      <Profile userName={userName} email={email} src={src}></Profile>
      <MyPageUl
        votingNumber={votingNumber}
        questionNumber={questionNumber}
      ></MyPageUl>
    </MyContainer>
    </div>
    
  );
};

export default Mypage;
