import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest } from "../../components/common/voteButton/ButtonTest";
import { HomeContainer } from "../../styles/Container";
import MainLayout from "../../components/layouts/headers/MainLayout";
const MainPage = () => {
  const datas = ButtonTest.data.votes;
  /**
   * 무한스크롤 구현하기
   */

  return (
    <>
      {" "}
      <MainLayout page={"main"} />
      <HomeContainer>
        {datas &&
          datas.map((data, id) => (
            <>
              <HomeLayout id={id} data={data} what="main" key={id} />
            </>
          ))}
      </HomeContainer>
    </>
  );
};

export default MainPage;
