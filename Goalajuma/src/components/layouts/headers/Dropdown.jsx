import { useState } from "react";
import styled from "styled-components";

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
      <button onClick={handleDrop}>{items.items[main].category} ▼</button>
      {open ? (
      <Ul>
        {items.items.map((item) => 
          <li key={item.id} className="item">
            <button>
              <div className="category-name" onClick={() => handleCategory(item.id)}>
                {item.category}
              </div>
            </button>
          </li>
        )}
      </Ul>
      ) : null}
    </Category>
  );
}

const Category = styled.div`
  display: inline-block;
`
const Ul = styled.ul`
  list-style: none;
  padding-left: 0px;
`