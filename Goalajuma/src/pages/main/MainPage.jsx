import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest } from "../../components/common/voteButton/ButtonTest";
import { HomeContainer } from "../../styles/Container";
import Main from "../../components/layouts/headers/Main";
import Footer from "../../components/layouts/footers/Footer";

const MainPage = () => {
  const datas = ButtonTest.data.votes;
  /**
   * 무한스크롤 구현하기
   */

  return (
    <>
      <Main />
      <HomeContainer>
        {datas &&
          datas.map((data, id) => (
            <HomeLayout id={id} data={data} what="main" key={id} />
          ))}
      </HomeContainer>
      <Footer page="main" />
    </>
  );
};

export default MainPage;
