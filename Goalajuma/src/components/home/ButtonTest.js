export const ButtonTest = {
  status: "200",
  message: "투표 조회 성공",
  data: {
    id: 1,
    isOwner: false,
    participant: false,
    voteCount: 826,
    createDate: "2023.09.13 18:00",
    endDate: "2023.09.14 18:00",
    active: "continue",
    title: "군대 가야할까요?..",
    content: "여자친구와 ...",
    options: {
      choice: null,
      result: [
        {
          id: 1,
          image: `vv.jpg`,
          optionName: "걍 가라",
          optionCount: 500,
          optionRatio: 50,
        },
        {
          id: 2,
          optionName: "가지마라",
          optionCount: 300,
          optionRatio: 30,
        },
        {
          id: 3,
          image: `vv.jpg`,
          optionName: "마음대로해라마음대로",
          optionCount: 200,
          optionRatio: 20,
        },
      ],
    },
  },
};
