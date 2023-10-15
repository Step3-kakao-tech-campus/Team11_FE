import Dropdown from "./Dropdown"

//value로 영어 추가 하기
const sortList = [  
  {
    id: 0,
    category: '최신순',
    value: 'latest',
  }, 
  {
    id: 1,
    category:'인기순',
    value: 'popularity',
  },
];


const contentList = [ 
  {
    id: 0,
    category:'골라조',
    value: 'total'
  }, 
  {
    id: 1,
    category:'뭐사조',
    value: 'buy',
  },
  {
    id: 2,
    category:'어디가조',
    value: 'where',
  }, 
  {
    id: 3,
    category:'뭐하조',
    value: 'what',
  }, 
  {
    id: 4,
    category:'뭐먹조',
    value: 'food',
  },
  {
    id: 5, 
    category: '뭐보조',
    value: 'movie',
  },
  {
    id: 6, 
    category: '들어조',
    value: 'listen',
  },
  {
    id: 7,
    category:'기타',
    value: 'etc',
  },
];

export const CategoryBox = () => {
  return (
    <div style={{paddingLeft: 20}}>
      <Dropdown items={sortList}/>
      <Dropdown items={contentList}/>
    </div>
  )
}

