export const ModalTest = {
  status: "200",
  message: "투표 조회 성공",
  data: {
    vote: {
      username: "rere",
      id: 1,
      isOwner: true,
      participate: false,
      voteCount: 826,
      category:'total',
      createDate: "2023.09.13 18:00",
      endDate: "2023.09.14 18:00",
      active: "continue",
      title: "군대 가야할까요?..",
      content: "여자친구와 ...",
      options: [
        {
          id: 1,
          optionName: "걍 가라",
          choiced: true,
          optionCount: 50,
          optionRatio: 33,
        },
        {
          id: 2,
          optionName: "가지마라",
          choiced: false,
          optionCount: 100,
          optionRatio: 67,
        },
      ],
    },
  },
};
