import styled from "styled-components";
import {FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton,} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard"; // 현재 url 복사

const ShareForm = () => {
  const currentUrl = window.location.href; // window 객체에서 현재 url 가져오기
  return (
    <FlexContainer>
			<h1>공유하기</h1>
			<GridContainer>
				<FacebookShareButton url={currentUrl}>
					<FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
				</FacebookShareButton>
				<TwitterShareButton url={currentUrl}>
					<TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
				</TwitterShareButton>
				<CopyToClipboard text={currentUrl}>
					<URLShareButton>URL</URLShareButton>
				</CopyToClipboard>
			</GridContainer>
		</FlexContainer>
  )
}
const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 48px);
	grid-column-gap: 10px;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;
const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;
export default ShareForm