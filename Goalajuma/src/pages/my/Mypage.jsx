import Profile from "@/components/common/mypage/Profile";
import { MyContainer } from "@/styles/Container";
import MyPageUl from "@/components/common/mypage/MyPageUl";
import MyPageHeader from "@/components/layouts/headers/MyPageHeader";
import Footer from "@/components/layouts/footers/Footer";
// import { MainMyData } from "@/components/common/mypage/MyPageData";
import { myInquire } from "@/services/my";
import { useQuery } from "react-query";

const Mypage = () => {
  const token = localStorage.getItem("token");
  const {data} = useQuery(
    ["myProfile"],
    myInquire,
    {
      enabled: !!token
    }
  );
  // const data =  myInquire();
  console.log(data);
  return (
    <div>
      <MyPageHeader/>
      <MyContainer>
        <Profile userName={data.nickName} email={data.email} src={"./vv.jpg"}></Profile>
        <MyPageUl
          votingNumber={data.participateVoteCount}
          questionNumber={data.createVoteCount}
        ></MyPageUl>
      </MyContainer>
      <Footer page="mypage"/>
    </div>
  );
};

export default Mypage;
