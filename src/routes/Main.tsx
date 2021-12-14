import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchTotal, fetchCity } from "../api";
import Now from "../chart/Now";
import Total from "../chart/Total";

const Span = styled.span`
	text-align: center;
	text-transform: uppercase;
	font-weight: 400;
	background-color: ${props => props.theme.boxColor};
	border-radius: 10px;
	border: 1px solid ${props => props.theme.textColor};
`;

const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const Header = styled.header`
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
`;

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
`;

const Tabs = styled.div`
	display:grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 25px 0px;
	gap: 10px;
`;

const Tab = styled(Span)`
	font-size: 16px;
	padding: 5px;
`;

const DivBox = styled.div`
	margin: 25px 0px;
`;

const TotalContainer = styled(DivBox)``;

const NowContainer = styled(DivBox)``;

const ByRegionContainer = styled(DivBox)``;

const Text = styled(Span)`
	display: block;
	font-size: 20px;
	padding: 5px;
`;

const Loader = styled.span`
	text-align: center;
	display: block;
`;

const Overview = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${props => props.theme.boxColor};
	border: 1px solid ${props => props.theme.textColor};
	padding: 12px 20px;
	border-radius: 10px;
`;
const OverviewItem = styled.div`
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

interface ITotal {
	resultCode: string;
	TotalCase: string;
	TotalRecovered: string;
	TotalDeath: string;
	NowCase: string;
	city1n: string;
	city2n: string;
	city3n: string;
	city4n: string;
	city5n: string;
	city1p: string;
	city2p: string;
	city3p: string;
	city4p: string;
	city5p: string;
	recoveredPercentage: number;
	deathPercentage: number;
	checkingCounter: number;
	checkingPercentage: number;
	caseCount: number;
	casePercentage: number;
	notcaseCount: number;
	notcasePercentage: number;
	TotalChecking: number;
	TodayRecovered: number;
	TodayDeath: number;
	TotalCaseBefore: string;
	source: string;
	updateTime: string;
	resultMessag: string;
}

interface ICity {
	countryName: string;
	newCase: number;
	totalCase: number;
	recovered: number;
	death: number;
	percentage: number;
	newCcase: number;
	newFcase: number;
}

interface ICitys {
	resultCode: string;
	resultMessage: string;
	korea: ICity;
	seoul: ICity;
	busan: ICity;
	daegu: ICity;
	incheon: ICity;
	gwangju: ICity;
	daejeon: ICity;
	ulsan: ICity;
	sejong: ICity;
	gyeonggi: ICity;
	gangwon: ICity;
	chungbuk: ICity;
	chungnam: ICity;
	jeonbuk: ICity;
	jeonnam: ICity;
	gyeongbuk: ICity;
	gyeongnam: ICity;
	jeju: ICity;
	quarantine: ICity;
}

function Main() {
	const { isLoading: totalLoading, data: totalData } = useQuery<ITotal>("total", fetchTotal);
	const { isLoading: cityLoading, data: cityData } = useQuery<ICitys>("city", fetchCity);
	return (
		<Container>
			<Header>
				<Title>COVID-19</Title>
			</Header>
			<Tabs>
				<Tab>국내</Tab>
				<Tab>시·도</Tab>
			</Tabs>
			<TotalContainer>
				{totalLoading ? (<Loader>Loading...</Loader>) : (
					<Overview>
						<OverviewItem>
							<span>사망자</span>
							<span>{totalData?.TotalDeath}</span>
						</OverviewItem>
						<OverviewItem>
							<span>확진자</span>
							<span>{totalData?.TotalCase}</span>
						</OverviewItem>
						<OverviewItem>
							<span>제한 해제</span>
							<span>{totalData?.TotalRecovered}</span>
						</OverviewItem>
					</Overview>
				)}
			</TotalContainer>
			<NowContainer>
				<Text>신규 확진자</Text>
				{cityLoading ? (<Loader>Loading...</Loader>) : (
					<Now cityData={cityData} />
				)}
			</NowContainer>
			<ByRegionContainer>
				<Text>지역별 비율</Text>
				{totalLoading ? (<Loader>Loading...</Loader>) : (
					<Total totalData={totalData} />
				)}
			</ByRegionContainer>
		</Container>
	);
}

export default Main;