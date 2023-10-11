export const MyParticipateData ={
	status : "200",
	message : "응답한 투표 리스트 조회 요청 성공",
	data : {
		votes : [{
			id : 1,
			active : "continue",
			title : "군대 가야할까요?"
		},
		{
			id : 2,
			active : "closed",
			title : "학교 가야할까요?"
		},
		{
			id : 3,
			active : "continue",
			title : "집 가야할까요?"
		}]
	},
};

export const MyQuestionsData = {
    status : "200",
    message : "올린 투표 리스트 요청 성공",
    data : {
      votes : [{
        id : 1,
        active : "continue",
        title : "군대 가야할까요?"
      },
      ]
    },
};