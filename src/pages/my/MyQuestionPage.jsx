import SubMyPageHeader from "@/components/layouts/headers/SubMyPageHeader";
import Footer from "@/components/layouts/footers/Footer";
// import { MyQuestionsData } from "@/components/common/mypage/mypageTestData";
import MyVoteList from "@/components/common/mypage/MyVoteList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import { Palette } from "@/styles/Palette";
import { MyVoteContainer } from "@/styles/Container";
import { useQuery } from "@tanstack/react-query";
import { myvoteInquire } from "@/services/my";
import Loader from "@/assets/Loader";

const MyQuestionPage = () => {
  const token = localStorage.getItem("token");
  const { data, isLoading } = useQuery({
    queryKey: ["myQuestion"],
    queryFn: myvoteInquire,
    enabled: !!token,
  });
  const info = data?.data.data;
  console.log(info);
  // const datas = MyQuestionsData.data.votes;
  // const datas = null;
  const navigate = useNavigate();
  return (
    <div>
      <SubMyPageHeader page="내가 한 질문" />
      <MyVoteContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {info?.votes.length ? (
              <div>
                {info &&
                  info?.votes.map((data) => (
                    <>
                      <MyVoteList data={data} route={routes.myquestion} />
                    </>
                  ))}
              </div>
            ) : (
              <Box>
                <Text>
                  내가 한 질문이 없습니다. <br />
                  첫 질문을 작성해보세요! <br />
                  당신의 고민을 <Goala>Goalajuma!</Goala>
                </Text>
                <div>
                  <Button onClick={() => navigate(routes.upload)}>
                    질문 작성 하러가기
                  </Button>
                </div>
              </Box>
            )}
          </>
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
  font-size: 20px;
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

export default MyQuestionPage;
