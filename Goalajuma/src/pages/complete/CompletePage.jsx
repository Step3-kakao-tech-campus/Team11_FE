import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest2 } from "../../components/home/ButtonTest";
import { HomeContainer } from "../../styles/Container";
const CompletePage = () => {
  const datas = ButtonTest2.data.votes;

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
              options={data.options.result}
              choice={data.options.choice}
              what="complete"
            />
          </>
        ))}
    </HomeContainer>
  );
};

export default CompletePage;
