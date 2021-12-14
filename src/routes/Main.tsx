import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchTotal, fetchCity } from "../api";
import { ITotal } from "../types/totalData";
import { ICitys } from "../types/cityData";
import { Loader } from "../styles/loader";
import {
	Container,
	Header,
	Title,
	Tabs,
	Tab
} from "../styles/main";
import {
	DivBox,
	TotalContainer,
	NowContainer,
	ByRegionContainer,
	Text,
	Overview,
	OverviewItem
} from "../styles/domestic";
import Now from "../chart/Now";
import Total from "../chart/Total";

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