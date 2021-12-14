import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchTotal, fetchCity } from "../api";
import ApexChart from "react-apexcharts";

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

function Main() {
	//const { isLoading: totalLoading, data: totalData } = useQuery<ITotal>("total", fetchTotal);
	//const { isLoading: cityLoading, data: cityData } = useQuery<ICity[]>("city", fetchCity);
	const totalLoading = false;
	const cityLoading = false;
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
				<Text>전체</Text>
				{totalLoading ? (<Loader>Loading...</Loader>) : null}
			</TotalContainer>
			<NowContainer>
				<Text>신규 확진자</Text>
				{cityLoading ? (<Loader>Loading...</Loader>) : null}
			</NowContainer>
			<ByRegionContainer>
				<Text>지역별 비율</Text>
				{totalLoading ? (<Loader>Loading...</Loader>) : (
					<ApexChart
						type='donut'
						series={[44, 55, 41, 17, 15
							// Number(totalData?.city1p),
							// Number(totalData?.city2p),
							// Number(totalData?.city3p),
							// Number(totalData?.city4p),
							// Number(totalData?.city5p)
						]}
						options={{
							// labels: [
							// 		totalData?.city1n,
							// 		totalData?.city2n,
							// 		totalData?.city3n,
							// 		totalData?.city4n,
							// 		totalData?.city5n,
							// 	],
							labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
							responsive: [{
								breakpoint: 480,
								options: {
									chart: {
										width: 200
									},
									legend: {
										position: 'bottom'
									}
								}
							}],
							legend: {
								show: false
							}
						}}
					/>
				)}
			</ByRegionContainer>
		</Container>
	);
}

export default Main;