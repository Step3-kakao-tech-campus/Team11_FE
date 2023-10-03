import {styled} from "styled-components"
import InputGroup from "../../components/login/InputGroup"
export const UploadPage = () => {
  return (
    <div>
      <Warning>*은 필수 입력 사항입니다.</Warning>
      <InputGroup
          id="title"
          type="text"
          placeholder="제목을 입력해주세요."
          label="제목 *"
      />
      <InputGroup
          id="title"
          type="text"
          placeholder="내용을 입력해주세요."
          label="글 작성"
      />
      <Warning>등록이 완료되면 수정이 불가합니다</Warning>
    </div>
  )
}

const Warning = styled.p`
  color: crimson;
  font-size: 9px;
  text-align: left;
`;