import {
	TotalContainer,
	NowContainer,
	ByRegionContainer,
	Text,
	Overview,
	OverviewItem
} from "../styles/domestic";
import Now from "../chart/Now";
import Total from "../chart/Total";
import { ITotal } from "../types/totalData";
import { ICitys } from "../types/cityData";
import { Loader } from "../styles/loader";

interface IProps {
	totalLoading: boolean;
	cityLoading: boolean;
	totalData?: ITotal;
	cityData?: ICitys;
}

function Domestic({ totalLoading, cityLoading, totalData, cityData }: IProps) {
	return (
		<>
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
					<Now cityData={cityData?.korea} />
				)}
			</NowContainer>
			<ByRegionContainer>
				<Text>지역별 비율</Text>
				{totalLoading ? (<Loader>Loading...</Loader>) : (
					<Total totalData={totalData} />
				)}
			</ByRegionContainer>
		</>
	);
}

export default Domestic;