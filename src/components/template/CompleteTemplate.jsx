import routes from "@/routes";
import HomeLayout from "../home/HomeLayout";
const CompleteTemplate = ({ datas, isFetching, error, modal }) => {
  return (
    <div>
      {error ? (
        <>글이 없어용</>
      ) : (
        datas &&
        // eslint-disable-next-line react/prop-types
        datas.map((data, id) => (
          <HomeLayout
            id={id}
            data={data}
            what="complete"
            key={id}
            route={routes.complete}
            modal={modal}
          />
        ))
      )}
    </div>
  );
};

export default CompleteTemplate;
