import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Palette } from "../../../styles/Palette";

/**
 *
 * @param {array} items
 * @return {JSX.Element}
 */
const Dropdown = (items) => {
  const [drop, setDrop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(items.items[0].category);
  const dropdownRef = useRef(null);

  const handleDrop = () => {
    setDrop(prev => !prev);
  };

  const handleCategory = (num) => {
    setSelectedCategory(items.items[num].category);
    handleDrop();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDrop(false);
      }
    };
    // Add
    document.addEventListener("mousedown", handleClickOutside);

    // Remove 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Category className="dropdown" ref={dropdownRef}>
      <MainButton onClick={handleDrop}>{selectedCategory}<ExpandMoreIcon style={{fontSize: 30}}/></MainButton>
      {drop ? (
      <Ul>
        {items.items.map((item) => 
          <Li key={item.id} className="item">
            <StyledButton>
              {/* 다시 해보기 */}
              <div 
                onClick={() => handleCategory(item.id)} 
                style={item.category === selectedCategory ? {color: Palette.font_blue, fontWeight: "bolder"}: null}
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
  margin-right: 10px;
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: ${Palette.font_gray};
  border-radius: 10px;
  border-width: 0px;
  padding: 0px;
  font-size: 15px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: ${Palette.font_gray};
  padding: 5px;
  width: 65px;
  height: 32px;
  border-width: 0px;
  font-size: 15px;
`; 

const Ul = styled.ul`
  top : 34px;
  position: absolute;
  list-style: none;
  padding-left: 0px;
  padding-bottom: 0px;
  border : 1px ${Palette.main_gray} solid;
  border-radius: 2px;
  margin: 0;
`;

const Li = styled.li`
  margin: 0;
`;

export default Dropdown;