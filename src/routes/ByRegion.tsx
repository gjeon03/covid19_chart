import { useRecoilState } from "recoil";
import { CityTitles, cityTitlesState } from "../atoms";
import { useEffect, useState } from "react";
import {
	DivBox,
	TotalContainer,
	NowContainer,
	Text,
	Overview,
	OverviewItem
} from "../styles/domestic";
import { Loader } from "../styles/loader";
import { ICitys, ICity } from "../types/cityData";
import Now from "../chart/Now";

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
			{cityLoading ? (<Loader>Loading...</Loader>) : (
				<>
					<select value={cityTitle} onInput={onInput}>
						{cityDataArray.map((obj, index) => {
							const countryName = obj.countryName;
							return <option key={index} value={countryName}>{countryName}</option>
						})}
					</select>
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
							<Now cityData={result} />
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
							<span>※ 지역구분은 신고지를 기준으로 하며, 초기 신고 이후 소관지역이 변경된 경우 변동 가능</span>
						</DivBox>
					</TotalContainer>
				</>
			)}
		</>
	);
}

export default ByRegion;