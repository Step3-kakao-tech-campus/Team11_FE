import { Dropdown } from "./Dropdown"
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
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
  return (
    <Nav>
      <CategoryBox>
        <Dropdown items={sortList}/>
        <Dropdown items={contentList} />
      </CategoryBox>
      <SearchButton className="search-button">
        <SearchIcon style={{fontSize: 35}}/>
      </SearchButton>
    </Nav>
  )
}

const Nav = styled.nav`
  height: 55px;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  background: #FFF;
  color: #000;
  display: flex;
  align-items: center;
`;

const CategoryBox = styled.div`
  margin-left: 15px;
`

const SearchButton  = styled.button`
  padding: 0%;
  background-color: #FFF;
  color: #7192FF;
  position: fixed;
  right: 10px;
  border-width: 0px;
`;
