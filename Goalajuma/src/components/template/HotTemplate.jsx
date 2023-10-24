import HomeLayout from "../home/HomeLayout";
const HotTemplate = ({ datas, isFetching, error }) => {
  return (
    <div>
      {isFetching || error ? (
        <>글이 없어용</>
      ) : (
        datas &&
        !isFetching &&
        // eslint-disable-next-line react/prop-types
        datas.map((data, id) => (
          <HomeLayout id={id} data={data} what="hot" key={id} />
        ))
      )}
    </div>
  );
};

export default HotTemplate;
