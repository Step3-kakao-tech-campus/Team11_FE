import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest } from "../../components/home/ButtonTest";
import { HomeContainer } from "../../styles/Container";
import MainLayout from "../../components/layouts/MainLayout";
const MainPage = () => {
  const datas = ButtonTest.data.votes;
  /**
   * 무한스크롤 구현하기
   */

  return (
    <>
      {" "}
      <MainLayout />
      <HomeContainer>
        {datas &&
          datas.map((data, id) => (
            <>
              <HomeLayout id={id} data={data} what="main" />
            </>
          ))}
      </HomeContainer>
    </>
  );
};

export default MainPage;
