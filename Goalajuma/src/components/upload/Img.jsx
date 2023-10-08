import styled from "styled-components";
import { useRecoilState } from "recoil";
import { optionState } from "../../utils/UploadAtom";
import { useState } from "react";
import Icon from "../common/Icon";
import { GoFileMedia } from "react-icons/go";
import { useRef } from "react";

const Img = ({ id, src }) => {
  const [imgFile, setImgFile] = useState("");
  const [idState, setIdState] = useState(id);
  const [option, setOption] = useRecoilState(optionState);
  const imgRef = useRef();
  // 이미지 업로드 input의 onChange
  const saveImgFile = (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
      inputImg(reader.result);
    };
  };
  const inputImg = (src) => {
    console.log(id);
    setOption((prop) => {
      return prop.map((choice, index) => {
        if (id == index) {
          return { ...choice, img: src };
        } else {
          return choice;
        }
      });
    });
  };

  return (
    <>
      {imgFile && src ? (
        <ImgContainer>
          {" "}
          <div className="Div">
            <img className="Img" src={src} id={id}></img>
          </div>
        </ImgContainer>
      ) : (
        <Container>
          <FileUploadContainer>
            <label htmlFor={`file${id}`} className="fileLabel" id={id}>
              <Icon size="23px" color="#7d7d7d">
                <GoFileMedia />
              </Icon>
              <p>이미지 추가</p>
            </label>
            <input
              type="file"
              className="fileInput"
              id={`file${id}`}
              accept="image/*"
              onChange={(e) => {
                saveImgFile(e);
              }}
              ref={imgRef}
            />
          </FileUploadContainer>
        </Container>
      )}
    </>
  );
};

const Container = styled.form`
  width: 134px;
  height: 48px;
  text-align: center;

  background-color: #d8d8d8;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgContainer = styled.div`
  width: 111px;
  .Img {
    width: 111px;
  }
  .Div {
    width: 111px;
    height: 111px;
    overflow: hidden;
    margin-top: 0.8rem;
    margin-bottom: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
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

export default Img;
