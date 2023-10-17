import styled from "styled-components";
import { Palette } from "../../styles/Palette";
import { useRecoilState, useResetRecoilState } from "recoil";
import { uploadSelector } from "../../utils/UploadAtom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const UploadButton = () => {
  const [count, setCount] = useRecoilState(uploadSelector);
  const [active, setActive] = useState(false);
  const resetList = useResetRecoilState(uploadSelector);

  const resetClick = (e) => {
    Swal.fire({
      icon: "info",
      text: "전체 내용을 초기화 하겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
      confirmButtonColor: "#429f50",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        resetList();
        setActive(false);
      }
    });
  };

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
    <UploadButtonStyle active={active ? true : false}>
      <button className="resetBtn" onClick={resetClick}>
        전체 초기화
      </button>
      <button className="uploadBtn" onClick={uploadButton}>
        등록
      </button>
    </UploadButtonStyle>
  );
};

const UploadButtonStyle = styled.div`
  .resetBtn {
    height: 40px;
    background-color: #ffffff;
    font-size: 15px;
    border: 1px solid #a8a8a8;
    color: #585858;
  }
  .resetBtn:hover {
    background-color: #f0f0f0;
  }
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
