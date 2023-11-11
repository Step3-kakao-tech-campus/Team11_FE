import routes from "@/routes";
import HomeLayout from "../home/HomeLayout";
import PropTypes from "prop-types";
/**
 * @param {object} props
 * @param {array} props.data
 * @param {boolean} props.error
 * @param {boolean} props.modal
 *
 **/
const CompleteTemplate = ({ datas, error, modal }) => {
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

CompleteTemplate.propTypes = {
  datas: PropTypes.array.isRequired,
  error: PropTypes.bool,
  modal: PropTypes.bool,
};
export default CompleteTemplate;
