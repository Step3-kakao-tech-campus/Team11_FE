import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest2 } from "../../components/home/ButtonTest";
import { HomeContainer } from "../../styles/Container";
import MainLayout from "../../components/layouts/headers/MainLayout";
const CompletePage = () => {
  const datas = ButtonTest2.data.votes;

  /**
   * 무한스크롤 구현하기
   */

  return (
    <>
      {" "}
      <MainLayout page="complete" />
      <HomeContainer>
        {datas &&
          datas.map((data, id) => (
            <>
              {" "}
              <HomeLayout id={id} data={data} what="complete" />
            </>
          ))}
      </HomeContainer>
    </>
  );
};

export default CompletePage;
