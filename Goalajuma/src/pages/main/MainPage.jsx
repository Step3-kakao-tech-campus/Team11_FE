import { HomeContainer } from "@/styles/Container";
import Main from "@/components/layouts/headers/Main";
import Footer from "@/components/layouts/footers/Footer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { mainInquire } from "@/services/main";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { totalCategoryState } from "@/utils/HeaderAtom";
import HomeTemplate from "@/components/template/HomeTemplate";
const MainPage = () => {
  // const datas = ButtonTest.data.votes;
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
      {isLoading && <div>로딩중...</div>}
      <Main />
      <HomeContainer>
        <HomeTemplate datas={Data} isFetching={isFetching} />
        <div ref={bottomObserver}></div>
      </HomeContainer>
      <Footer page="main" />
    </>
  );
};

export default MainPage;
