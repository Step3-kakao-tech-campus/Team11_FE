import { Dropdown } from "./Dropdown"
import styled from "styled-components";

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
      <Dropdown items={sortList} />
      <Dropdown items={contentList} />
      <button className="search-button">
        검색이요
      </button>
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
`;
