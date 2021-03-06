import { useRecoilState } from "recoil";
import { CityTitles, cityTitlesState } from "../atoms";
import { useEffect, useState } from "react";
import {
	DivBox,
	TotalContainer,
	NowContainer,
	Text,
	Overview,
	OverviewItem,
	Message,
	MessageBox,
	Select,
} from "../styles/covid19View";
import { Loader } from "../styles/loader";
import { ICitys, ICity } from "../types/cityData";
import DetailChart from "../Components/DetailChart";
import { Helmet } from "react-helmet-async";

interface IProps {
	cityData?: ICitys;
	cityLoading: boolean;
}

function createArray(dataDelete?: ICity) {
	const array = [...Object.values(dataDelete as ICity) as ICity[]];
	return array as ICity[];
}

function ByRegion({ cityData, cityLoading }: IProps) {
	const dataDelete = { ...cityData };
	delete dataDelete.resultCode;
	delete dataDelete.resultMessage;
	delete dataDelete.korea;
	const cityDataArray = createArray(dataDelete as ICity);
	const [cityTitle, setCityTitle] = useRecoilState(cityTitlesState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCityTitle(event.currentTarget.value as CityTitles);
	};
	const [result, setResult] = useState<ICity>();
	useEffect(() => {
		if (!cityLoading) {
			const tmp = cityDataArray.find((toDo) => toDo.countryName === cityTitle) as ICity;
			setResult(tmp as ICity);
		}
	}, [cityLoading, cityTitle, cityDataArray])
	return (
		<>
			<Helmet>
				<title>시·도 확진</title>
			</Helmet>
			{cityLoading ? (<Loader>Loading...</Loader>) : (
				<>
					<Select value={cityTitle} onInput={onInput}>
						{cityDataArray.map((obj, index) => {
							const countryName = obj.countryName;
							return <option key={index} value={countryName}>{countryName}</option>
						})}
					</Select>
					<TotalContainer>
						<Overview>
							<OverviewItem>
								<span>사망자</span>
								<span>{result?.death}</span>
							</OverviewItem>
							<OverviewItem>
								<span>확진자</span>
								<span>{result?.totalCase}</span>
							</OverviewItem>
							<OverviewItem>
								<span>제한 해제</span>
								<span>{result?.recovered}</span>
							</OverviewItem>
						</Overview>
						<NowContainer>
							<Text>신규 확진자</Text>
							<DetailChart cityData={result} />
						</NowContainer>
						<DivBox>
							<Overview>
								<OverviewItem>
									<span>총 신규 확진자</span>
									<span>{result?.newCase}</span>
								</OverviewItem>
								<OverviewItem>
									<span>발생률((확진자/인구)/10만)</span>
									<span>{result?.percentage} 명</span>
								</OverviewItem>
							</Overview>
							<MessageBox>
								<Message>※ 지역구분은 신고지를 기준으로 하며, 초기 신고 이후 소관지역이 변경된 경우 변동 가능</Message>
							</MessageBox>
						</DivBox>
					</TotalContainer>
				</>
			)}
		</>
	);
}

export default ByRegion;