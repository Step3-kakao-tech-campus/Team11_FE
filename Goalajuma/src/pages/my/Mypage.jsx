import Profile from "../../components/common/mypage/Profile";
import { MyContainer } from "../../styles/Container";
import MyList from "../../components/common/mypage/MyList";
const Mypage = () => {
  let votingNumber = 3;
  let questionNumber = 2;
  let userName = "김코딩";
  let email = "kkj@naver.com";
  let src = "vv.jpg";
  return (
    <MyContainer>
      <Profile userName={userName} email={email} src={src}></Profile>
      <MyList
        votingNumber={votingNumber}
        questionNumber={questionNumber}
      ></MyList>
    </MyContainer>
  );
};

export default Mypage;
