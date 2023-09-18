import { Dropdown } from "./Dropdown"

export const Header = () => {
  const sortList = ['최신순', '인기순'];
  const contentList = ['골라조', '뭐사조', '어디가조', '뭐하조', '뭐먹조', '뭐보조', '기타'];
  
  return (
    <div>
      <Dropdown items={sortList}/>
      <Dropdown items={contentList}/>
      <button className="search-button">
        검색이요
      </button>
    </div>
  )
}
