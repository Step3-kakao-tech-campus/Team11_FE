import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest } from "../../components/home/ButtonTest";
import { HomeContainer } from "../../styles/Container";
const CompletePage = () => {
  const datas = ButtonTest.data.votes;

  /**
   * 무한스크롤 구현하기
   */

  return (
    <HomeContainer>
      {" "}
      {datas &&
        datas.map((data, id) => (
          <>
            {" "}
            <HomeLayout
              id={id}
              data={data}
              options={data.options}
              what="complete"
            />
          </>
        ))}
    </HomeContainer>
  );
};

export default CompletePage;
