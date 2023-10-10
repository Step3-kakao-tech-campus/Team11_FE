import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

/**
 * @param {string} key
 * @return {JSX.Element}
 */
const SearchButton = ({key}) => {
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