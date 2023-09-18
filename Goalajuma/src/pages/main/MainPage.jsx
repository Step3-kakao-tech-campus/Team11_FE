import HomeLayout from "../../components/home/ButtonLayout";
import { ButtonTest } from "../../components/home/ButtonTest";

const MainPage = () => {
  const data = ButtonTest.data;

  return (
    <div>
      <HomeLayout
        options={data.options}
        participants={data.participant}
        isOwner={data.isOwner}
      />
    </div>
  );
};

export default MainPage;
