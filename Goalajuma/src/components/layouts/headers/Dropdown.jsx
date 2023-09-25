import { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Palette } from "../../../styles/Palette";

export const Dropdown = (items) => {
  const [open, setOpen] = useState(false);
  const [main, setMain] = useState(0);

  const handleDrop = () => {
    setOpen(prev => !prev);
  };

  const handleCategory = (num) => {
    setMain(num);
    handleDrop();
  };

  return (
    <Category className="dropdown">
      <MainButton onClick={handleDrop}>{items.items[main].category}<ExpandMoreIcon style={{fontSize: 30}}/></MainButton>
      {open ? (
      <Ul>
        {items.items.map((item) => 
          <Li key={item.id} className="item">
            <StyledButton>
              {/* 다시 해보기 */}
              <div 
                onClick={() => handleCategory(item.id)} 
                style={item.id === main ? {color: Palette.font_blue, fontWeight: "bolder"}: null}
              > 
                {item.category}
              </div>
            </StyledButton>
          </Li>
        )}
      </Ul>
      ) : null}
    </Category>
  );
}

const Category = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 3px;
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: ${Palette.font_gray};
  padding: 0 0 0 5px;
  border-radius: 10px;
  width: 93px;
`
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: ${Palette.font_gray};
  padding: 5px;
  width: 93px;
  height: 32px;
  border-radius: 0px;
`; 
// useRef로 크기 유지 고려

const Ul = styled.ul`
  top : 34px;
  position: absolute;
  list-style: none;
  padding-left: 0px;
  padding-bottom: 0px;
  border : 1px ${Palette.main_gray} solid;
  margin: 0;
`;

const Li = styled.li`
  margin: 0;
`;

