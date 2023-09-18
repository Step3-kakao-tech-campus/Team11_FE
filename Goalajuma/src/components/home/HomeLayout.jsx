import { MainContainer } from "../../styles/Container";
import ButtonLayout from "./ButtonLayout";
const HomeLayout = ({ options, participants, isOwner }) => {
  return (
    <MainContainer>
      <ButtonLayout
        options={options}
        participants={participants}
        isOwner={isOwner}
      ></ButtonLayout>
    </MainContainer>
  );
};

export default HomeLayout;
