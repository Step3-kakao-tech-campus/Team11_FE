import { HomeContainer } from "@/styles/Container";
import Main from "@/components/layouts/headers/Main";
import Footer from "@/components/layouts/footers/Footer";
import CompleteTemplate from "@/components/template/CompleteTemplate";
import { useRecoilValue } from "recoil";
import { useRef, useEffect } from "react";
import { totalCategoryState } from "@/utils/HeaderAtom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { completeInquire } from "@/services/main";

const CompletePage = () => {
  const categoryData = useRecoilValue(totalCategoryState);
  const bottomObserver = useRef(null);

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    data,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["mainInfo"],
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
      {isLoading && <div>로딩중...</div>}
      <Main />
      <HomeContainer>
        <CompleteTemplate datas={Data} isFetching={isFetching} />
        <div ref={bottomObserver}></div>
      </HomeContainer>
      <Footer page="complete" />
    </>
  );
};

export default CompletePage;
