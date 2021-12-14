import styled from "styled-components";

export const DivBox = styled.div`
	margin: 25px 0px;
`;


export const TotalContainer = styled(DivBox)``;

export const NowContainer = styled(DivBox)``;

export const ByRegionContainer = styled(DivBox)``;

export const Text = styled.span`
	text-align: center;
	text-transform: uppercase;
	font-weight: 400;
	background-color: ${props => props.theme.boxColor};
	border-radius: 10px;
	border: 1px solid ${props => props.theme.textColor};
	display: block;
	font-size: 20px;
	padding: 5px;
	`;



export const Overview = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${props => props.theme.boxColor};
	border: 1px solid ${props => props.theme.textColor};
	padding: 12px 20px;
	border-radius: 10px;
	`;

export const OverviewItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 33%;
	color: ${props => props.theme.textColor};
	span:first-child {
		font-size: 13px;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
	span:last-child {
		font-size: 18px;
		font-weight:700;
	}
`;

export const MessageBox = styled.div`
	margin-top:15px;
`;
	
export const Message = styled.span`
	text-align: center;
`;

export const Select = styled.select`
	width: 100%;
	background-color: ${props => props.theme.selectBox};
	background-size: 20px;
	padding: 10px;
	border-radius: 10px;
	outline: 0 none;
	color: ${props => props.theme.textColor};
	font-size: 16px; 
	border: 1px solid ${props => props.theme.textColor};
	font-weight: 500;
	option {
		background: black;
		background-color: ${props => props.theme.selectBox};
		color: ${props => props.theme.textColor};
		padding: 3px 0;
		text-align: center;
	}
`
	
