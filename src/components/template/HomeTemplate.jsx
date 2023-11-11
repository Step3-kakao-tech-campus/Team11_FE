import HomeLayout from "../home/HomeLayout";
import routes from "@/routes";
import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {array} props.datas
 * @param {boolean} props.error
 * @param {boolean} props.modal
 *
 **/

const HomeTemplate = ({ datas, error, modal }) => {
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

HomeTemplate.propTypes = {
  datas: PropTypes.array.isRequired,
  error: PropTypes.bool,
  modal: PropTypes.bool,
};

export default HomeTemplate;
