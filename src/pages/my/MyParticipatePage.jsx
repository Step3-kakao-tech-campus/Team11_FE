import SubMyPageHeader from "@/components/layouts/headers/SubMyPageHeader";
import Footer from "@/components/layouts/footers/Footer";
import MyVoteList from "@/components/common/mypage/MyVoteList";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import styled from "styled-components";
import { Palette } from "@/styles/Palette";
import { MyVoteContainer } from "@/styles/Container";
import { useQuery } from "@tanstack/react-query";
import { participateInquire } from "@/services/my";
import Loader from "@/assets/Loader";
import useLogin from "@/hooks/useLogin";

const MyParticipatePage = () => {
  const isLogIn = useLogin();
  const { data, isLoading } = useQuery({
    queryKey: ["myParticipate"],
    queryFn: () => {
      return participateInquire();
    },
    enabled: !!isLogIn,
  });

  const info = data?.data.data;
  const navigate = useNavigate();

  return (
    <div>
      <SubMyPageHeader page="내가 참여한 투표" />
      <MyVoteContainer>
        {!isLoading ? (
          info?.votes.length ? (
            <div>
              {info &&
                info?.votes.map((data) => (
                  <>
                    <MyVoteList data={data} route={routes.myparticipation} />
                  </>
                ))}
            </div>
          ) : (
            <Box>
              <Text>
                참여한 투표가 없습니다. <br />
                당신의 생각을 <Goala>Goala</Goala> 주세요!
              </Text>
              <div>
                <Button onClick={() => navigate(routes.hot)}>
                  투표 하러가기
                </Button>
              </div>
            </Box>
          )
        ) : (
          <Loader />
        )}
      </MyVoteContainer>
      <Footer page="mypage" />
    </div>
  );
};

const Box = styled.div`
  margin-top: 10rem;
`;
const Text = styled.p`
  font-size: 17px;
  line-height: 2;
`;
const Goala = styled.span`
  color: ${Palette.font_blue};
  font-size: 1.5em;
`;

const Button = styled.button`
  letter-spacing: 0.25rem;
  color: #fff;
  font-size: 16px;
  width: 14rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: ${Palette.button_blue};
`;

export default MyParticipatePage;
