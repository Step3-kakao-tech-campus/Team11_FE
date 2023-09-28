import Profile from "../../components/common/mypage/Profile";
import { MyContainer } from "../../styles/Container";
const Mypage = () => {
  let votingNumber = 3;
  let questionNumber = 2;
  let userName = "김코딩";
  let email = "kkj@naver.com";
  let src = "vv.jpg";
  return (
    <MyContainer>
      <Profile userName={userName} email={email} src={src}></Profile>
      <ul>
        <li>내가 참여한 투표({votingNumber})</li>
        <li>내가 한 질문({questionNumber})</li>
        <li>개인정보 수정</li>
      </ul>
    </MyContainer>
  );
};

export default Mypage;
