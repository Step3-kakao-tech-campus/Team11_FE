import { HomeContainer } from "@/styles/Container";
import HotPageHeader from "@/components/layouts/headers/HotPageHeader";
import Footer from "@/components/layouts/footers/Footer";
import HotTemplate from "@/components/template/HotTemplate";
import Loader from "@/assets/Loader";
import ErrorScreen from "@/components/common/ErrorScreen";
import { useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { hotInquire } from "@/services/main";
import NonePage from "@/components/common/NonePage";
import PropTypes from "prop-types";

/**
 * @param {object} prop
 * @param {boolean} prop.modal
 */
const HotPage = ({ modal }) => {
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
    queryKey: ["hotInfo"],
    queryFn: ({ pageParam = 0 }) => hotInquire(pageParam),
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
      <HotPageHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <HomeContainer>
          {error ? (
            <ErrorScreen error={error}></ErrorScreen>
          ) : !Data?.length ? (
            <NonePage what="hot" />
          ) : (
            <>
              <HotTemplate datas={Data} isFetching={isFetching} modal={modal} />
              {isFetching && <Loader />}
            </>
          )}
        </HomeContainer>
      )}

      <Footer page="hot" />
    </>
  );
};

HotPage.propTypes = {
  modal: PropTypes.bool,
};
export default HotPage;
