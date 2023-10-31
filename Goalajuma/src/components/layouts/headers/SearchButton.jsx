import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Icon from '@/components/common/Icon';
import { Palette } from '@/styles/Palette';

// Icon 으로 감싸기
// 클릭이벤트 줘야함-> 모달까지 구현
const SearchButton = () => {
  return (
    <div>
      <Search >
        <Icon color={Palette.font_blue}>
          <SearchIcon style={{fontSize: 35}}/>
        </Icon>
      </Search>
    </div>
  );
};

const Search = styled.button`
  // 위치 다시 조정
  position: absolute;
  right: 3px;
  top: 8px;
  color: #7192ff;
  background-color: #fff;
  border-width: 0px; 
  cursor: pointer;
`;

export default SearchButton;
