import styled, {keyframes} from "styled-components";

export const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const titleAnimaion = keyframes`
	50% {
		opacity: 0;
	}
`; 

export const Header = styled.header`
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	position: relative;
	div {
		position: absolute;
		right: 0;
	}
`;

export const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
	&:hover {
		animation: ${titleAnimaion} 300ms step-end infinite;
	}
`;

export const Tabs = styled.div`
	display:grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 15px 0px;
	gap: 10px;
`;

export const Tab = styled.span<{ isActive: boolean }>`
	text-align: center;
	text-transform: uppercase;
	font-weight: 400;
	background-color: ${props => props.theme.boxColor};
	border-radius: 10px;
	border: 1px solid ${(props) =>
		props.isActive ? props.theme.accentColor : props => props.theme.textColor};
	font-size: 16px;
	color: ${(props) =>
		props.isActive ? props.theme.accentColor : props => props.theme.textColor};
	a {
		padding: 7px 0px;
		display: block;
	}
	&:hover {
		border: 1px solid ${(props) => props.theme.accentColor};
		color: ${(props) => props.theme.accentColor};
	}
`;

export const ImgContainer = styled.div`
  padding: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Backdrop = styled.div`
  width: 400px;
  height: 350px;
  background-image: url("https://i.pinimg.com/564x/7d/73/3a/7d733acc83cce320af19feb7c38993d0.jpg");
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: 0;
  transition: 1s;
  &:hover{
	  transform: scale(1.3);
	  transition: 1s;
  }
`;
