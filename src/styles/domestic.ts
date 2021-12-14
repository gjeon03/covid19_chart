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