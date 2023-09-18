import ButtonLayout from "./ButtonLayout";
const HomeLayout = ({ options, participants, isOwner }) => {
  return (
    <div>
      <ButtonLayout
        options={options}
        participants={participants}
        isOwner={isOwner}
      ></ButtonLayout>
    </div>
  );
};

export default HomeLayout;
