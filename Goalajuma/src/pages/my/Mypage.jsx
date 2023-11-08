import Profile from "@/components/common/mypage/Profile";
import { MyContainer } from "@/styles/Container";
import MyPageUl from "@/components/common/mypage/MyPageUl";
import MyPageHeader from "@/components/layouts/headers/MyPageHeader";
import Footer from "@/components/layouts/footers/Footer";
// import { MainMyData } from "@/components/common/mypage/MyPageData";
import { myInquire } from "@/services/my";
import { useQuery } from "@tanstack/react-query";

const Mypage = () => {
  const token = localStorage.getItem("token");
  if(!token) { // 로그아웃시 뒤로 가기 불가
    window.history.forward();
  }

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["myProfile"],
    queryFn: myInquire,
    enabled: !!token,
  });

  const profile = data?.data;
  
  return (
    <div>
      <MyPageHeader />
      <MyContainer>
        <Profile
          userName={profile?.data.nickName}
          email={profile?.data.email}
          src={"./vv.jpg"}
        ></Profile>
        <MyPageUl
          votingNumber={profile?.data.participateVoteCount}
          questionNumber={profile?.data.createVoteCount}
          data={profile?.data}
        ></MyPageUl>
      </MyContainer>
      <Footer page="mypage" />
    </div>
  );
};

export default Mypage;