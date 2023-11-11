import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { detailInquire } from "@/services/main";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/assets/Loader";
import ModalTemplate from "./ModalTemplate";

/**
 *
 * @param {object} id
 * @param {string} what
 */

const ModalLayout = ({ what, click }) => {
  const { id } = useParams();
  const datas = useQuery({
    queryKey: ["voteId", id],
    queryFn: () => {
      return detailInquire(id);
    },
    enabled: !!id,
  });
  const detailData = datas?.data?.data.data.vote;

  return (
    <>
      {datas.error ? (
        <>{datas.error}</>
      ) : (
        <>
          {datas.isLoading ? (
            <Loader />
          ) : (
            detailData && (
              <ModalTemplate
                detailData={detailData}
                click={click}
                what={what}
              ></ModalTemplate>
            )
          )}
        </>
      )}
    </>
  );
};

ModalLayout.propTypes = {
  id: PropTypes.number,
  what: PropTypes.string,
};

export default ModalLayout;
