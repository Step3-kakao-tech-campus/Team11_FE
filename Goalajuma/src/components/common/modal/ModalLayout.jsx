import styled from "styled-components";

import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { detailInquire, ChatInquire } from "@/services/main";
import { useQueries } from "@tanstack/react-query";
import Loader from "@/assets/Loader";
import ModalTemplate from "./ModalTemplate";

/**
 *
 * @param {object} id
 * @param {string} what
 */

const ModalLayout = ({ what }) => {
  const { id } = useParams();
  const datas = useQueries({
    queries: [
      {
        queryKey: ["voteId", id],
        queryFn: () => {
          return detailInquire(id);
        },
        enabled: !!id,
      },
      {
        queryKey: ["commentId", id],
        queryFn: () => {
          return ChatInquire(id);
        },
        enabled: !!id,
      },
    ],
  });
  const detailData = datas[0]?.data?.data?.data?.vote;
  const chatData = datas[1]?.data?.data?.data?.comments;

  return (
    <>
      {datas[0].error || datas[1].error ? (
        <>
          {datas[0].errorr}|{datas[1].error}
        </>
      ) : (
        <>
          {datas[0].isLoading || datas[1].isLoading ? (
            <Loader />
          ) : (
            detailData &&
            chatData && (
              <ModalTemplate
                detailData={detailData}
                chatData={chatData}
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
