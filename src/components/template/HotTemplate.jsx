import HomeLayout from "../home/HomeLayout";
const HotTemplate = ({ datas, isFetching }) => {
  return (
    <div>
      {datas &&
        !isFetching &&
        // eslint-disable-next-line react/prop-types
        datas.map((data, id) => (
          <HomeLayout id={id} data={data} what="hot" key={id} />
        ))}
    </div>
  );
};

export default HotTemplate;
