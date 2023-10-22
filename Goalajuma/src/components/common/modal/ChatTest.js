export const ChatTest = {
	status : "200",
	message : "댓글 조회 성공",
	data : {
		comments : [{
				id : 1,
				isOwner : false,
				username : "김가연",
				content : "여자친구를 놔두고 먼저 가는건 좀 아닌 것 같아요",
				createTime : "2023.09.13 18:00"
			},
			{
				id : 2,
				isOwner : false,
				username : "진우석",
				content : "그냥 닥치고 군대는 일찍가는게 최고임",
				createTime : "2023.09.13 20:00"
			},
			{
				id : 3,
				isOwner : true,
				username : "김수민",
				content : "여자친구를 놔두고 먼저 가는건 좀 아닌 것 같아요",
				createTime : "2023.09.14 18:00"
			}]
	}
}