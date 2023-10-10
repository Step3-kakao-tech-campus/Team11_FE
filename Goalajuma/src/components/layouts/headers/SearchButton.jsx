import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

// Icon 으로 감싸기 
// 클릭이벤트 줘야함-> 모달까지 구현 
const SearchButton = () => {
  return (
    <div>
      <Search >
          <SearchIcon style={{fontSize: 35}}/>
      </Search>
    </div>
  )
}

const Search  = styled.button` // 위치 다시 조정
  position: absolute;
  right: 3px;
  top: 8px;
  color: #7192FF;
  background-color: #fff;
  border-width: 0px; 
`;

export default SearchButton;