import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest } from "../../components/home/ButtonTest";

const MainPage = () => {
  const datas = ButtonTest.data.votes;

  /**
   * 무한스크롤 구현하기
   */

  return (
    <>
      {" "}
      {datas &&
        datas.map((data) => (
          <>
            {" "}
            <HomeLayout id={data.id} data={data} options={data.options} />
          </>
        ))}
    </>
  );
};

export default MainPage;
