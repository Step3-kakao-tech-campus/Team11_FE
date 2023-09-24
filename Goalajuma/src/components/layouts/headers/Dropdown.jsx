import { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <StyledButton onClick={handleDrop}>{items.items[main].category}<ExpandMoreIcon style={{fontSize: 30}}/></StyledButton>
      {open ? (
      <Ul>
        {items.items.map((item) => 
          <Li key={item.id} className="item">
            <StyledButton style={{backgroundColor: '#7192FF'}}>
              <div className="category-name" onClick={() => handleCategory(item.id)}>
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
`
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 0%;
  border-radius: 0;
  width: 88px;

`;

const Ul = styled.ul`
  position: absolute;
  list-style: none;
  padding-left: 0px;
  padding-bottom: 0px;
`;

const Li = styled.li`
  margin: 0;
`;

