import MainLayout from "../../components/layouts/MainLayout";
import TextArea from "../../components/upload/TextArea";
import Input from "../../components/upload/input";
import styled from "styled-components";
import AddChoice from "../../components/upload/AddChoice";
import CategoryNDeadLine from "../../components/upload/CategoryNDeadLine";
import UploadButton from "../../components/upload/UploadButton";

const UploadPage = () => {
  return (
    <div>
      <MainLayout name="투표 등록하기" />
      <UploadContainer>
        <p className="p">*은 필수 질문 입니다.</p>
        <Input name="질문 추가 *" placeholder="Q. 질문을 입력해주세요." />
        <TextArea
          name="상세 설명 추가"
          placeholder="상세 설명을 입력해주세요."
        />
        <AddChoice />
        <CategoryNDeadLine />
        {/* 이미지 리사이즈공부 */}
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

    color: #bb5959;
    margin: 1rem 0 1rem 0;

    position: relative;
    left: 100px;
  }
`;
export default UploadPage;
