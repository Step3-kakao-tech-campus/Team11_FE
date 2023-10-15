import styled from "styled-components";
import { Palette } from "../../styles/Palette";
import { useRecoilState } from "recoil";
import { uploadSelector } from "../../utils/UploadAtom";
import { useEffect, useState } from "react";
const UploadButton = () => {
  const [count, setCount] = useRecoilState(uploadSelector);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (count.title && count.option.length > 1) {
      const act = count.option.filter((item) => {
        return item.name == "";
      });
      act.length > 0 ? setActive(false) : setActive(true);
    }
  }, [count]);

  const uploadButton = () => {
    if (active) {
      console.log(count);
    }
  };

  return (
    <UploadButtonStyle onClick={uploadButton} active={active ? true : false}>
      등록
    </UploadButtonStyle>
  );
};

const UploadButtonStyle = styled.div`
  background-color: ${(prop) =>
    prop.active ? Palette["button_blue"] : Palette["percent_gray"]};
  color: ${(prop) => (prop.active ? "#FFFFFF" : "#000000")};

  width: 100%;
  max-width: 490px;
  height: 60px;
  font-size: 19px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  z-index: 100000;
`;

export default UploadButton;
