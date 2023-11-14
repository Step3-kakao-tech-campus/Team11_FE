import { HomeContainer } from "@/styles/Container";
import Main from "@/components/layouts/headers/Main";
import Footer from "@/components/layouts/footers/Footer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { mainInquire } from "@/services/main";
import { useEffect, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  segmentState,
  sortState,
  totalCategoryState,
} from "@/utils/HeaderAtom";
import HomeTemplate from "@/components/template/HomeTemplate";
import Loader from "@/assets/Loader";
import ErrorScreen from "@/components/common/ErrorScreen";
import NonePage from "@/components/common/NonePage";
import Alert from "@/components/common/Alert";
import { isToastState } from "@/utils/ToastAtom";
import PropTypes from "prop-types";

/**
 * @param {object} prop
 * @param {boolean} prop.modal
 */
const MainPage = ({ modal }) => {
  const [toast, setToast] = useRecoilState(isToastState);
  const categoryData = useRecoilValue(totalCategoryState);

  const bottomObserver = useRef(null);

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    data,
    isFetching,
    error,
  } = useInfiniteQuery({
    queryKey: ["mainInfo", categoryData],
    queryFn: ({ pageParam = 0 }) => mainInquire(categoryData, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;
      const isLast = lastPage?.data.data.isLast;
      return isLast ? undefined : nextPage;
    },
    retry: 0,
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !isLoading &&
            hasNextPage &&
            !isFetchingNextPage
          ) {
            fetchNextPage();
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    if (bottomObserver.current) {
      io.observe(bottomObserver.current);
    }

    return () => {
      if (bottomObserver.current) {
        io.unobserve(bottomObserver.current);
      }
    };
  }, [isLoading, hasNextPage, fetchNextPage]);

  const Data = data?.pages.flatMap((param) => param.data.data.votes);

  return (
    <>
      {toast && (
        <Alert margin="2rem" setIsAlert={setToast}>
          {" "}
          게시글이 등록되었습니다.{" "}
        </Alert>
      )}
      <Main page="main" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HomeContainer>
            {error ? (
              <ErrorScreen error={error}></ErrorScreen>
            ) : !Data?.length ? (
              <NonePage what="main" />
            ) : (
              <>
                <HomeTemplate
                  datas={Data}
                  isFetching={isFetching}
                  modal={modal}
                />
                <div ref={bottomObserver}></div>
                {isFetching && <Loader />}
              </>
            )}
          </HomeContainer>
        </>
      )}
      <Footer page="main" />
    </>
  );
};

MainPage.propTypes = {
  modal: PropTypes.bool,
};
export default MainPage;
