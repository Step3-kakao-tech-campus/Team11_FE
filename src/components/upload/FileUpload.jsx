import styled from "styled-components";
import Icon from "../common/Icon";
import { GoFileMedia } from "react-icons/go";
import PropTypes from "prop-types";

/**
 *
 * @param {object} param
 * @param {func} param.func
 * @param {number} param.id
 * @returns
 */

const FileUpload = ({ func, id }) => {
  return (
    <FileUploadContainer id={id}>
      <label htmlFor="file" className="fileLabel" id={id}>
        <Icon size="23px" color="#7d7d7d">
          <GoFileMedia />
        </Icon>
        <p>이미지 추가</p>
      </label>
      <input
        type="file"
        className="fileInput"
        id="file"
        accept="image/jpeg, image/png"
        onChange={(e) => {
          func(e);
        }}
      />
    </FileUploadContainer>
  );
};

FileUpload.propTypes = {
  func: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const FileUploadContainer = styled.div`
  margin: 0;
  .fileInput {
    display: none;
  }
  .fileLabel {
    font-size: 14px;
    color: #7d7d7d;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px 5px 0 0;
  }
  .fileLabel p {
    margin: 0 0 7px 5px;
  }
`;

export default FileUpload;
