import routes from "@/routes";
import HomeLayout from "../home/HomeLayout";
import PropTypes from "prop-types";

/**
 * @param {object} prop
 * @param {array} prop.datas
 * @param {boolean} prop.modal
 * @param {boolean} prop.isFetching
 */

const HotTemplate = ({ datas, isFetching, modal }) => {
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
            route={routes.hot}
            modal={modal}
          />
        ))}
    </div>
  );
};

HotTemplate.propTypes = {
  datas: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  modal: PropTypes.bool,
};

export default HotTemplate;
