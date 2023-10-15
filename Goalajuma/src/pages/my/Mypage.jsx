import Profile from "../../components/common/mypage/Profile";
import { MyContainer } from "../../styles/Container";
import MyPageUl from "../../components/common/mypage/MyPageUl";
import MyPageHeader from "../../components/layouts/headers/MyPageHeader";
import Footer from "../../components/layouts/footers/Footer";

const Mypage = () => {
  let votingNumber = 3;
  let questionNumber = 1;
  let userName = "김코딩";
  let email = "kkj@naver.com";
  let src = "vv.jpg";
  return (
    <div>
      <MyPageHeader/>
      <MyContainer>
        <Profile userName={userName} email={email} src={src}></Profile>
        <MyPageUl
          votingNumber={votingNumber}
          questionNumber={questionNumber}
        ></MyPageUl>
      </MyContainer>
      <Footer page="mypage"/>
    </div>
  );
};

export default Mypage;
