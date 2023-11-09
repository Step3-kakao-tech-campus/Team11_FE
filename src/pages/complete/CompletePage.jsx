import { HomeContainer } from "@/styles/Container";
import Main from "@/components/layouts/headers/Main";
import Footer from "@/components/layouts/footers/Footer";
import CompleteTemplate from "@/components/template/CompleteTemplate";
import { useRecoilValue } from "recoil";
import { useRef, useEffect } from "react";
import { completeTotalCategoryState } from "@/utils/HeaderAtom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { completeInquire } from "@/services/main";
import Loader from "@/assets/Loader";
import ErrorScreen from "@/components/common/ErrorScreen";
import NonePage from "@/components/common/NonePage";

const CompletePage = ({ modal }) => {
  const categoryData = useRecoilValue(completeTotalCategoryState);
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
    queryKey: ["completeInfo", categoryData],
    queryFn: ({ pageParam = 0 }) => completeInquire(categoryData, pageParam),
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
      <Main page="complete" />
      {isFetching ? (
        <Loader />
      ) : (
        <HomeContainer>
          {error ? (
            <ErrorScreen error={error}></ErrorScreen>
          ) : !Data?.length ? (
            <NonePage what="complete" />
          ) : (
            <>
              {" "}
              <CompleteTemplate
                datas={Data}
                isFetching={isFetching}
                modal={modal}
              />
              <div ref={bottomObserver}></div>
              {isFetching && <Loader />}
            </>
          )}
        </HomeContainer>
      )}

      <Footer page="complete" />
    </>
  );
};

export default CompletePage;
