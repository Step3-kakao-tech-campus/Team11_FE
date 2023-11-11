import Profile from "@/components/common/mypage/Profile";
import { MyContainer } from "@/styles/Container";
import MyPageUl from "@/components/common/mypage/MyPageUl";
import MyPageHeader from "@/components/layouts/headers/MyPageHeader";
import Footer from "@/components/layouts/footers/Footer";
import { myInquire } from "@/services/my";
import { useQuery } from "@tanstack/react-query";
import useLogin from "@/hooks/useLogin";

const Mypage = () => {
  const isLogIn = useLogin();

  const { data } = useQuery({
    queryKey: ["myProfile"],
    queryFn: myInquire,
    enabled: !!isLogIn,
  });

  const profile = data?.data;

  return (
    <div>
      <MyPageHeader />
      <MyContainer>
        <Profile
          userName={profile?.data.nickname}
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
