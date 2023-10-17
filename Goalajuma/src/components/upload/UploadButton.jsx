import styled from "styled-components";
import { Palette } from "../../styles/Palette";
import { useRecoilState } from "recoil";
import { uploadSelector } from "../../utils/UploadAtom";
import { useEffect, useState } from "react";

const UploadButton = () => {
  const [count, setCount] = useRecoilState(uploadSelector);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!!count.title && count.option.length > 1) {
      const act = count.option.filter((item) => {
        return item.name == "";
      });
      act.length > 0 ? setActive(false) : setActive(true);
    }
    if (count.option.length < 2 || !count.title) {
      setActive(false);
    }
  }, [count]);

  const uploadButton = () => {
    if (active) {
      console.log(count);
    }
  };

  return (
    <UploadButtonStyle active={active ? true : false}>
      <button className="uploadBtn" onClick={uploadButton}>
        등록
      </button>
    </UploadButtonStyle>
  );
};

const UploadButtonStyle = styled.div`
  .uploadBtn {
    background-color: ${(prop) =>
      prop.active ? Palette["button_blue"] : Palette["percent_gray"]};
    color: ${(prop) => (prop.active ? "#FFFFFF" : "#000000")};
    width: 100%;
    max-width: 450px;
    height: 60px;
    font-size: 19px;
    border: 0;
  }

  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  max-width: 450px;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 100000;
`;

export default UploadButton;
