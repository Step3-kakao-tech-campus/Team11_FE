import Dropdown from "./Dropdown"

const sortList = [  
  {
    id: 0,
    category: '최신순',
  }, 
  {
    id: 1,
    category:'인기순',
  },
];


const contentList = [ 
  {
    id: 0,
    category:'골라조',
  }, 
  {
    id: 1,
    category:'뭐사조',
  },
  {
    id: 2,
    category:'어디가조',
  }, 
  {
    id: 3,
    category:'뭐하조',
  }, 
  {
    id: 4,
    category:'뭐먹조',
  },
  {
    id: 5, 
    category: '뭐보조',
  },
  {
    id: 6,
    category:'기타',
  },
];

/**
 * 
 * @returns {JSX.Element}
 */
export const CategoryBox = () => {
  return (
    <div style={{paddingLeft: 20}}>
      <Dropdown items={sortList}/>
      <Dropdown items={contentList}/>
    </div>
  )
}

