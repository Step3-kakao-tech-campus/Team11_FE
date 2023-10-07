/* eslint-disable react/prop-types */
import styled from "styled-components";
import { GoChevronDown } from "react-icons/go";
import Icon from "../common/Icon";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { categoryState, timeLimitState } from "../../utils/UploadAtom";
import { category, deadline } from "../upload/CategoryNDeadLine";
const Option = ({ datas, name, def }) => {
  const [list, setList] = useState(false);
  const [categoryStates, setCategoryState] = useRecoilState(categoryState);
  const [timeLimitStates, setTimeLimitState] = useRecoilState(timeLimitState);

  const selectCategory = (e) => {
    setList(!list);
  };

  const categoryList = category.filter((element) => {
    if (element.value == categoryStates) {
      return true;
    }
  });

  const deadLineList = deadline.filter((element) => {
    if (element.value == timeLimitStates) {
      return true;
    }
  });

  const onClickCategory = (e) => {
    if (name == "카테고리") {
      const { value } = e.target;
      setCategoryState(value);
    } else {
      const { value } = e.target;
      setTimeLimitState(value);
    }
  };

  return (
    <>
      <Select list={list}>
        <button onClick={selectCategory} className="selectBtn">
          <p>
            {name == "카테고리" ? categoryList[0].name : deadLineList[0].name}
          </p>
          {/* 여기 부분이 atom 에서 값 가져와서 넣어주기, 아래 리스트 클릭 시 상태 바뀌게 하기.. */}
          <Icon size="20px" color="#585858">
            <GoChevronDown className="icon" />
          </Icon>
        </button>
        {datas.map((data, index) => {
          const className = () => {
            if (name == "카테고리") {
              return data.value == categoryStates ? "active" : "";
            } else {
              return data.value == timeLimitStates ? "active" : "";
            }
          };

          return (
            <li key={name == "카테고리" ? index + 100 : index} className="Li">
              <button
                onClick={(e) => onClickCategory(e)}
                value={data.value}
                list={list}
                id={name == "카테고리" ? index + 100 : index}
                className={`optionLi ${className()}`}
              >
                {" "}
                {data.name}
              </button>
            </li>
          );
        })}
      </Select>
    </>
  );
};
const Select = styled.ul`
  list-style: none;
  padding: 0;
  width: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 12px;
  color: #909090;

  .selectBtn {
    width: 100%;
    height: 30px;
    color: #909090;

    background-color: #ffffff;
    border: none;
    border-bottom: 2px solid #9eb0ea;
    font-weight: 700;

    outline: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .icon {
    position: relative;
    top: 3px;
  }

  .optionLi {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;

    height: 30px;
    width: 100%;

    padding-left: 18px;
    border: none;

    list-style: none;
    background-color: #e9eeff;
    color: #909090;

    visibility: ${(props) => (props.list ? "visible" : "hidden")};
  }
  .optionLi:hover {
    background-color: #d3deff;
  }

  .active {
    background-color: #d3deff;
  }
`;

export default Option;
