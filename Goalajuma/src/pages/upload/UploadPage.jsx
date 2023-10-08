import MainLayout from "../../components/layouts/MainLayout";
import TextArea from "../../components/upload/TextArea";
import Input from "../../components/upload/input";
import styled from "styled-components";

const UploadPage = () => {
  return (
    <div>
      <MainLayout name="투표 등록하기" />
      <UploadContainer>
        <Input name="질문 추가 *" placeholder="Q. 질문을 입력해주세요." />
        <TextArea
          name="상세 설명 추가 *"
          placeholder="상세 설명을 입력해주세요."
        />
      </UploadContainer>

      {/* 기본 인풋(질문, 상세설명) 선택지 인풋(사진 넣기, 선택지 추가) 카테고리
      설정(카테고리 및 마감시간) 업로드 버튼(활성화, 비활성화) */}
    </div>
  );
};

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default UploadPage;
