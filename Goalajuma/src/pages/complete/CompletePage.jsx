import HomeLayout from "@/components/home/HomeLayout";
import { ButtonTest2 } from "@/components/common/voteButton/ButtonTest";
import { HomeContainer } from "@/styles/Container";
import Main from "@/components/layouts/headers/Main";
import Footer from "@/components/layouts/footers/Footer";
const CompletePage = () => {
  const datas = ButtonTest2.data.votes;

  /**
   * 무한스크롤 구현하기
   */

  return (
    <>
      <Main />
      <HomeContainer>
        {datas &&
          datas.map((data, id) => (
            <HomeLayout id={id} data={data} what="complete" key={id} />
          ))}
      </HomeContainer>
      <Footer page="complete" />
    </>
  );
};

export default CompletePage;
