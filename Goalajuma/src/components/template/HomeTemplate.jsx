import HomeLayout from "../home/HomeLayout";
const HomeTemplate = ({ datas, isFetching, error }) => {
  return (
    <div>
      {error ? (
        <>글이 없어용</>
      ) : (
        datas &&
        // eslint-disable-next-line react/prop-types
        datas.map((data, id) => (
          <HomeLayout id={id} data={data} what="home" key={id} />
        ))
      )}
    </div>
  );
};

export default HomeTemplate;
