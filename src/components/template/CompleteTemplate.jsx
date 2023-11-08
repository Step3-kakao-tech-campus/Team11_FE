import HomeLayout from "../home/HomeLayout";
const CompleteTemplate = ({ datas, isFetching, error }) => {
  return (
    <div>
      {error ? (
        <>글이 없어용</>
      ) : (
        datas &&
        // eslint-disable-next-line react/prop-types
        datas.map((data, id) => (
          <HomeLayout id={id} data={data} what="complete" key={id} />
        ))
      )}
    </div>
  );
};

export default CompleteTemplate;
