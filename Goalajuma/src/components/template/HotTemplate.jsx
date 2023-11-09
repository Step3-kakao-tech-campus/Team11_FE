import routes from "@/routes";
import HomeLayout from "../home/HomeLayout";
routes;
const HotTemplate = ({ datas, isFetching }) => {
  return (
    <div>
      {datas &&
        !isFetching &&
        // eslint-disable-next-line react/prop-types
        datas.map((data, id) => (
          <HomeLayout
            id={id}
            data={data}
            what="hot"
            key={id}
            route={routes.home}
          />
        ))}
    </div>
  );
};

export default HotTemplate;
