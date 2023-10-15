import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest } from "../../components/common/voteButton/ButtonTest";
import { HomeContainer } from "../../styles/Container";
import HotPageHeader from "../../components/layouts/headers/HotPageHeader";
import Footer from "../../components/layouts/footers/Footer";

const HotPage = () => {
  const datas = ButtonTest.data.votes;

  /**
   * 무한스크롤 구현하기
   */

  return (
    <>
      <HotPageHeader/>
      <HomeContainer>
        {" "}
        {datas &&
          datas.map((data, id) => (
            <>
              <HomeLayout
                id={id}
                data={data}
                options={data.options}
                what="hot"
                choice={data.options.choice}
              />
            </>
          ))}
      </HomeContainer>
      <Footer page="hot" />
    </>
  );
};

export default HotPage;
