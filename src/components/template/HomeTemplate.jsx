import HomeLayout from "../home/HomeLayout";
import routes from "@/routes";
const HomeTemplate = ({ datas, isFetching, error, modal }) => {
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
            what="home"
            key={id}
            route={routes.home}
            modal={modal}
          />
        ))
      )}
    </div>
  );
};

export default HomeTemplate;
