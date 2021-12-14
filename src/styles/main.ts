import styled from "styled-components";

export const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
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
`;

export const Tabs = styled.div`
	display:grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 25px 0px;
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