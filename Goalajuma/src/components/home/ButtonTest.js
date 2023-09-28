export const ButtonTest = {
  status: "200",
  message: "응답 성공",
  data: {
    votes: [
      {
        id: 1,
        isOwner: true,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.9.28 00:20",
        active: "continue",
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
        isOwner: false,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        avtive: "continue",
        participate: false,
        title: "군대 가야할까요?..",
        content:
          "여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: [
          {
            id: 5,
            optionName: "걍 가라",

            optionCount: 12,
            optionRatio: 50,
          },
          {
            id: 6,
            optionName: "가지마라",

            optionCount: 12,
            optionRatio: 50,
          },
        ],
      },
      {
        id: 3,
        isOwner: false,
        voteCount: 9000,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "continue",
        participate: false,
        title: "어떤걸 먹을까요?..",
        content: " 치킨이랑 피자중에 뭐먹을까요? 코파일럿 사용했어요",
        options: [
          {
            id: 3,
            optionName: "치킨",
            image: "fire.png",
            optionCount: 12,
            optionRatio: 12,
          },
          {
            id: 4,
            optionName: "피자",
            image: "vv.jpg",
            optionCount: 12,
            optionRatio: 12,
          },
        ],
      },
    ],
  },
  isLast: "true",
};

//핫게
export const ButtonTest2 = {
  status: "200",
  message: "응답 성공",
  data: {
    votes: [
      {
        id: 1,
        isOwner: false,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "finish",
        participate: false,
        title: "군대 가야할까요?..",
        content:
          "여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: {
          choice: 1,
          result: [
            {
              id: 1,
              optionName: "걍 가라",
              optionCount: 50,
              optionRatio: 33,
            },
            {
              id: 2,
              optionName: "가지마라",
              optionCount: 100,
              optionRatio: 67,
            },
          ],
        },
      },
      {
        id: 10,
        isOwner: false,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "finish",
        participate: false,
        title: "군대 가야할까요?..",
        content:
          "여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: {
          choice: 3,
          result: [
            {
              id: 3,
              optionName: "걍 가라",
              optionCount: 50,
              optionRatio: 33,
            },
            {
              id: 4,
              optionName: "가지마라",
              optionCount: 100,
              optionRatio: 67,
            },
          ],
        },
      },
      {
        id: 20,
        voteCount: 9000,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "finish",
        participate: false,
        title: "어떤걸 먹을까요?..",
        content: " 치킨이랑 피자중에 뭐먹을까요? 코파일럿 사용했어요",
        options: {
          choice: 5,
          result: [
            {
              id: 4,
              optionName: "걍 가라",
              optionCount: 50,
              optionRatio: 33,
            },
            {
              id: 5,
              optionName: "가지마라",
              optionCount: 100,
              optionRatio: 67,
            },
          ],
        },
      },
    ],
  },
  isLast: "true",
};
