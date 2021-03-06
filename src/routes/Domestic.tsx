import {
	TotalContainer,
	NowContainer,
	ByRegionContainer,
	Text,
	Overview,
	OverviewItem,
	TopMsg,
} from "../styles/covid19View";
import DetailChart from "../Components/DetailChart";
import TotalChart from "../Components/TotalChart";
import { ITotal } from "../types/totalData";
import { ICitys } from "../types/cityData";
import { Loader } from "../styles/loader";
import { Helmet } from "react-helmet-async";

interface IProps {
	totalLoading: boolean;
	cityLoading: boolean;
	totalData?: ITotal;
	cityData?: ICitys;
}

function Domestic({ totalLoading, cityLoading, totalData, cityData }: IProps) {
	return (
		<>
			<Helmet>
				<title>국내 확진</title>
			</Helmet>
			<TotalContainer>
				{totalLoading ? (<Loader>Loading...</Loader>) : (
					<>
						<TopMsg>
							<Text>{totalData?.updateTime}</Text>
						</TopMsg>
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
					</>
				)}
			</TotalContainer>
			<NowContainer>
				<Text>신규 확진자</Text>
				{cityLoading ? (<Loader>Loading...</Loader>) : (
					<DetailChart cityData={cityData?.korea} />
				)}
			</NowContainer>
			<ByRegionContainer>
				<Text>지역별 비율</Text>
				{totalLoading ? (<Loader>Loading...</Loader>) : (
					<TotalChart totalData={totalData} />
				)}
			</ByRegionContainer>
		</>
	);
}

export default Domestic;