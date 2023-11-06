export const ButtonTest = {
  status: "200",
  message: "응답 성공",
  data: {
    votes: [
      {
        id: 1,
        username: "홍길동",
        isOwner: true,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.9.29 00:37",
        active: "continue",
        participate: true,
        title: "군대 가야할까요?",
        content:
          "여자친구와 결혼을 앞두고 있습니다여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: [
          {
            id: 1,
            optionName: "걍 가라",
            choiced: true,
            optionCount: 12,
            optionRatio: 50,
          },
          {
            id: 2,
            optionName: "가지마라",
            choiced: false,
            optionCount: 12,
            optionRatio: 50,
          },
        ],
      },
      {
        id: 2,
        username: "홍길동",
        isOwner: false,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "continue",
        participate: false,
        title: "군대 가야할까요?..",
        content:
          "여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: [
          {
            id: 5,
            optionName: "걍 가라",
            choiced: false,
            optionCount: 12,
            optionRatio: 50,
          },
          {
            id: 6,
            optionName: "가지마라",
            choiced: false,
            optionCount: 12,
            optionRatio: 50,
          },
        ],
      },
      {
        id: 3,
        username: "홍길동",
        isOwner: false,
        voteCount: 9000,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "continue",
        participate: false,
        title: "어떤걸 먹을까요?..",
        content:
          " 치킨이랑 피자중에 뭐먹을까요? 치킨이랑 피자중에 뭐먹을까요? 저는 피자요 근데 치킨도 먹을래요.",
        options: [
          {
            id: 3,
            optionName: "치킨",
            image: "tst.jpeg",
            optionCount: 12,
            optionRatio: 12,
            choiced: false,
          },
          {
            id: 4,
            optionName: "피자",
            image: "vv.jpg",
            optionCount: 12,
            optionRatio: 12,
            choiced: false,
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
        username: "홍길동",
        isOwner: false,
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "complete",
        participate: true,
        title: "군대 가야할까요?..",
        content:
          "여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: [
          {
            id: 1,
            optionName: "걍 가라",
            optionCount: 50,
            optionRatio: 33,
            choiced: false,
          },
          {
            id: 2,
            optionName: "가지마라",
            optionCount: 100,
            optionRatio: 67,
            choiced: true,
          },
        ],
      },
      {
        id: 10,
        isOwner: false,
        username: "홍길동",
        voteCount: 826,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "complete",
        participate: false,
        title: "군대 가야할까요?..",
        content:
          "여자친구와 결혼을 앞두고 있습니다. 군대를 가야할까요? 아니면 안가야할까요?",
        options: [
          {
            id: 3,
            optionName: "걍 가라",
            optionCount: 50,
            optionRatio: 33,
            choiced: false,
          },
          {
            id: 4,
            optionName: "가지마라",
            optionCount: 100,
            optionRatio: 67,
            choiced: false,
          },
        ],
      },

      {
        id: 20,
        username: "홍길동",
        voteCount: 9000,
        createDate: "2023.09.14 18:00",
        endDate: "2023.09.30 18:00",
        active: "complete",
        participate: false,
        title: "어떤걸 먹을까요?..",
        content: " 치킨이랑 피자중에 뭐먹을까요? 코파일럿 사용했어요",
        options: [
          {
            id: 4,
            optionName: "걍 가라",
            optionCount: 50,
            optionRatio: 33,
            choiced: false,
          },
          {
            id: 5,
            optionName: "가지마라",
            optionCount: 100,
            optionRatio: 67,
            choiced: false,
          },
        ],
      },
    ],
  },
  isLast: "true",
};
