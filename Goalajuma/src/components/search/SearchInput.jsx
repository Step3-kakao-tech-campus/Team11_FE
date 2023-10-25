import styled from "styled-components";
import Icon from "../common/Icon";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

import { Palette } from "@/styles/Palette";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";

const SearchInput = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const searchOnChange = (e) => {
    setValue(e.target.value);
  };
  const goToSearch = (e) => {
    e.preventDefault();
    alert(`${value} 에 대한 내용을 검색합니다~`);
  };
  return (
    <SearchStyle onSubmit={(e) => goToSearch(e)}>
      <Icon
        size="21px"
        color={Palette.point_blue}
        onClick={() => {
          console.log("d");
          navigate(routes.home);
        }}
      >
        <FaArrowLeft />
      </Icon>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={value}
        onChange={(e) => searchOnChange(e)}
      />

      <Icon size="21px" color={Palette.point_blue} onClick={goToSearch}>
        <FaSearch />
      </Icon>
    </SearchStyle>
  );
};

const SearchStyle = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 2rem;

  & input {
    width: 230px;
    height: 49px;
    border-radius: 100px;
    border: 1.5px solid rgba(113, 146, 255, 1);
    font-size: 16px;
    padding: 0 50px;
    background-color: transparent;
  }
  & div:first-child {
    position: relative;
    top: 0.2rem;
    left: 2.5rem;
  }
  & div:last-child {
    position: relative;
    top: 0.2rem;
    right: 2.5rem;
  }
`;
export default SearchInput;
