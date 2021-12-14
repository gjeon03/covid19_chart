import { useQuery } from "react-query";
import { useMatch, Link, Routes, Route } from "react-router-dom";
import { fetchTotal, fetchCity } from "../api";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import Domestic from "./Domestic";
import { ITotal } from "../types/totalData";
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
import { Loader } from "../styles/loader";
import Now from "../chart/Now";
import { ICity, ICitys } from "../types/cityData";
import { CityTitles, cityTitlesState } from "../atoms";
import { useEffect, useState } from "react";

function Main() {
	const { isLoading: totalLoading, data: totalData } = useQuery<ITotal>("total", fetchTotal);
	const { isLoading: cityLoading, data: cityData } = useQuery<ICitys>("city", fetchCity);
	const domesticData = {
		totalLoading,
		cityLoading,
		totalData,
		cityData
	};
	const tmp = { ...cityData };
	delete tmp.resultCode;
	delete tmp.resultMessage;
	delete tmp.korea;
	const cityDataArray = [...Object.values(tmp) as ICity[]];
	const domesticMatch = useMatch("/domestic");
	const regionMatch = useMatch("/region");
	const [cityTitle, setCityTitle] = useRecoilState(cityTitlesState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCityTitle(event.currentTarget.value as CityTitles);
	};
	const [result, setResult] = useState<ICity>();
	useEffect(() => {
		const tmp = cityDataArray.find((toDo) => toDo.countryName === cityTitle);
		setResult(tmp as ICity);
	}, [cityLoading, cityTitle])
	return (
		<Container>
			<Header>
				<Title>COVID-19</Title>
			</Header>
			<Tabs>
				<Tab isActive={domesticMatch !== null}>
					<Link to="domestic">국내</Link>
				</Tab>
				<Tab isActive={regionMatch !== null}>시·도</Tab>
			</Tabs>
			<select value={cityTitle} onInput={onInput}>
				{cityDataArray.map((obj, index) => {
					const countryName = obj.countryName;
					return <option key={index} value={countryName}>{countryName}</option>
				})}
			</select>
			<TotalContainer>
				{cityLoading ? (<Loader>Loading...</Loader>) : (
					<>
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
					</>
				)}
			</TotalContainer>
			<Routes>
				{/* <Route path="domestic" element={<Domestic {...domesticData} />} /> */}
				{/* <Route path="region" element={<Domestic {cityLoading, cityData} />} /> */}
			</Routes>
		</Container>
	);
}

export default Main;