import HomeLayout from "../../components/home/HomeLayout";
import { ButtonTest } from "../../components/home/ButtonTest";

const MainPage = () => {
  const data = ButtonTest.data;

  /**
   * 무한스크롤 구현하기
   */

  return (
    <div>
      <HomeLayout data={data} options={data.options} />
    </div>
  );
};

export default MainPage;
