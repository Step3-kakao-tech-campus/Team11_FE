import { Dropdown } from "./Dropdown";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineFire } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GoChevronLeft } from "react-icons/go";

const pageInfo = {
  main: {
    back: false,
    title: null,
    search: true,
  },
  hot: {
    back: false,
    title: "HOT 게시판",
    search: true,
    icon: <AiOutlineFire fontSize={28}/>
  },
  upload: {
    back: true,
    title: "투표 등록하기",
    search: false,
  },
  complete: {
    back: false,
    title: null,
    search:true,
  },
  mypage: {
    back: false,
    title: "마이페이지",
    search: false,
    icon: <BsPerson fontSize={28}/>,
  },

};
const sortList = [  // recoil atom으로 리팩토링?
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
 @param 
 page: string
 **/
export const MainHeader = ({page}) => {
  const pageInfoData = pageInfo[page];
  return (
      <Nav>
        {pageInfoData.back ?
          <BackButton>
            <GoChevronLeft fontSize={28}/>
          </BackButton> :
          null
        }
        { pageInfoData.title ? 
          <PageName>
            {pageInfoData.icon}
            <Title>
              {pageInfoData.title}
            </Title>
          </PageName> :
          <CategoryBox>
            <Dropdown items={sortList}/>
            <Dropdown items={contentList} />
          </CategoryBox>
        }
        { pageInfoData.search ?
          <SearchButton className="search-button">
            <SearchIcon style={{fontSize: 35}}/>
          </SearchButton>
          : null
        }
        
      </Nav>
  )
}

const Nav = styled.nav`
  height: 55px;
  position: fixed;
  top: 0px;
  width: 390px;
  background-color: #FFF;
  color: #000;
  display: flex;
  align-items: center;
  z-index: 500;
`;

const Title = styled.div`
  margin: 2px 0 0 5px
`;
const PageName = styled.div`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  display:flex;
`;

const CategoryBox = styled.div`
  margin-left: 15px;
`;

const SearchButton  = styled.button`
  padding: 0%;
  position: absolute;
  right: 15px;
  color: #7192FF;
  background-color: #fff;
  /* position: fixed; */
  /* right: 10px; */
  border-width: 0px;
`;

const BackButton  = styled.button`
  padding: 0%;
  position: absolute;
  left: 15px;
  color: #7192FF;
  background-color: #fff;
  border-width: 0px;
`;

