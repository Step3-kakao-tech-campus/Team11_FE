import MainLayout from "../../components/layouts/MainLayout";
import TextArea from "../../components/upload/TextArea";
import Input from "../../components/upload/input";
import styled from "styled-components";
import AddChoice from "../../components/upload/AddChoice";
import Options from "../../components/upload/Options";
import UploadButton from "../../components/upload/UploadButton";

const UploadPage = () => {
  //recoil 로 상태 가져온 후 한번에 서버로 보내기
  // 리코일 안에 content, title,optionlist 값이 없다면
  // 버튼 활성화가 안되게 해야함

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
        <Options />
        {/* 이미지 리사이즈공부 */}
        <UploadButton></UploadButton>
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
