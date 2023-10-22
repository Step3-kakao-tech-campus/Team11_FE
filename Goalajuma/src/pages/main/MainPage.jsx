import HomeLayout from "@/components/home/HomeLayout";
import { ButtonTest } from "@/components/common/voteButton/ButtonTest";
import { HomeContainer } from "@/styles/Container";
import Main from "@/components/layouts/headers/Main";
import Footer from "@/components/layouts/footers/Footer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { mainInquire } from "@/services/main";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { totalCategoryState } from "@/utils/HeaderAtom";
const MainPage = () => {
  // const datas = ButtonTest.data.votes;
  const categoryData = useRecoilValue(totalCategoryState);
  const bottomObserver = useRef(null);

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    data,
  } = useInfiniteQuery({
    queryKey: ["mainInfo"],
    queryFn: ({ pageParam = 0 }) => mainInquire(categoryData, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;
      const isLast = lastPage?.response?.data.isLast;
      return isLast ? undefined : nextPage;
    },
  });

  const Data = data?.pages[0].data.data.votes;
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading && hasNextPage) {
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

  return (
    <>
      <Main />
      <HomeContainer>
        {Data &&
          Data?.map((data, id) => (
            <HomeLayout id={id} data={data} what="main" key={id} />
          ))}
        <div ref={bottomObserver}></div>
      </HomeContainer>
      <Footer page="main" />
    </>
  );
};

export default MainPage;
