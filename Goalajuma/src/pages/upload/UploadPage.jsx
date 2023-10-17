import MainHeader from "../../components/layouts/headers/MainHeader";
import TextArea from "../../components/upload/TextArea";
import Input from "../../components/upload/input";
import styled from "styled-components";
import AddChoice from "../../components/upload/AddChoice";
import CategoryNDeadLine from "../../components/upload/CategoryNDeadLine";
import UploadButton from "../../components/upload/UploadButton";
import { useEffect } from "react";
import { uploadSelector } from "../../utils/UploadAtom";
import { useResetRecoilState } from "recoil";
import Swal from "sweetalert2";
const UploadPage = () => {
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
      }
    });
  };
  const preventRefresh = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventRefresh);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventRefresh);
    };
  }, []);

  return (
    <div>
      <MainHeader page="upload" />
      <UploadContainer>
        <p className="p">*은 필수 질문 입니다.</p>
        <button onClick={resetClick}>초기화</button>

        <Input name="질문 추가 *" placeholder="Q. 질문을 입력해주세요." />
        <TextArea
          name="상세 설명 추가"
          placeholder="상세 설명을 입력해주세요."
        />
        <AddChoice />
        <CategoryNDeadLine />
        <UploadButton></UploadButton>
      </UploadContainer>
    </div>
  );
};

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;

  .p {
    font-size: 12px;
    font-weight: 300;

    color: #dc6868;
    margin: 1rem 0 1rem 0;

    position: relative;
    left: 100px;
  }
`;
export default UploadPage;
