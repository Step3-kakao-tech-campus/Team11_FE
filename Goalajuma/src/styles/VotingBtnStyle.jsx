import styled from "styled-components";
import { Palette } from "./Palette";

export const MainButtonSt = styled.div`
  font-family: "NanumGothic";
  max-width: 295px;
  min-width: 120px;

  ::-webkit-progress-bar {
    border-radius: 20px;

    height: 38px;
    width: 100%;

    background-color: #ffffff;
    box-shadow: 0px 1.68314px 1.68314px 1.26236px rgba(0, 0, 0, 0.25);
  }
  progress {
    appearance: none;
    width: 100%;
  }
  ::-webkit-progress-value {
    background-color: ${(props) =>
      props.choice ? Palette["main_blue"] : Palette["main_gray"]};

    transition: all 0.3s;

    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;
export const BtnContents = styled.p`
  margin: 0 1.5rem;
  color: ${(props) =>
    props.choice ? Palette["font_blue"] : Palette["font_gray"]};

  position: relative;
  top: 2.1rem;
  z-index: 2;

  font-size: 12px;
  font-weight: 600;
`;

export const PercentNnumberSt = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.7rem;
  p {
    font-size: 12px;
    font-weight: 600;

    color: ${(props) =>
      props.choice ? Palette["font_blue"] : Palette["font_gray"]};
  }
  p:first-child::after {
    content: "|";
    color: ${Palette["main_gray"]};
    font-weight: 800;
    margin: 0 0.3rem;
  }
`;
