import MainLayout from "../../components/layouts/headers/MainLayout";
import { MyParticipateData } from "../../components/common/mypage/mypageTestData";
import MyVoteList from "../../components/common/mypage/MyVoteList";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import styled from "styled-components";
import { Palette } from "../../styles/Palette";

const MyParticipatePage = () => {
  const datas = MyParticipateData.data.votes;
  // const datas = null;

  const navigate = useNavigate();

  return (
    <div>
      <MainLayout page="myvoted" />
      {datas ? (
        <div>
          {datas &&
            datas.map((data) => (
              <>
                <MyVoteList data={data} />
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
            <Button onClick={() => navigate(routes.hot)}>투표 하러가기</Button>
          </div>
        </Box>
      )}
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

export default MyParticipatePage;
