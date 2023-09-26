export const ButtonTest = {
  status: "200",
  message: "응답 성공",
  data: {
    votes: [
      {
        id: 1,
        isOwner: false,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.14 18:00",
        avtive: "continue",
        participate: false,
        title: "군대 가야할까요?..",
        content:
          "여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: [
          {
            id: 1,
            optionName: "걍 가라",

            optionCount: 12,
            optionRatio: 50,
          },
          {
            id: 2,
            optionName: "가지마라",

            optionCount: 12,
            optionRatio: 50,
          },
        ],
      },
      {
        id: 2,
        voteCount: 9000,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.14 18:00",
        active: "continue",
        participate: false,
        title: "어떤걸 먹을까요?..",
        content: " 치킨이랑 피자중에 뭐먹을까요? 코파일럿 사용했어요",
        options: [
          {
            id: 3,
            optionName: "치킨",

            optionCount: 12,
            optionRatio: 12,
          },
          {
            id: 4,
            optionName: "피자",

            optionCount: 12,
            optionRatio: 12,
          },
        ],
      },
    ],
  },
  isLast: "true",
};
