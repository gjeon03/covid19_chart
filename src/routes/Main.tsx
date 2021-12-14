import { useQuery } from "react-query";
import { useMatch, Link, Routes, Route } from "react-router-dom";
import { fetchTotal, fetchCity } from "../api";
import Domestic from "./Domestic";
import ByRegion from "./ByRegion";
import { ITotal } from "../types/totalData";
import {
	Container,
	Header,
	Title,
	Tabs,
	Tab
} from "../styles/main";
import { ICitys } from "../types/cityData";

function Main() {
	const { isLoading: totalLoading, data: totalData } = useQuery<ITotal>("total", fetchTotal);
	const { isLoading: cityLoading, data: cityData } = useQuery<ICitys>("city", fetchCity);
	const domesticMatch = useMatch("/domestic");
	const regionMatch = useMatch("/region");
	const domesticData = {
		totalLoading,
		cityLoading,
		totalData,
		cityData
	};
	const byRegionData = {
		cityData,
		cityLoading
	}
	return (
		<Container>
			<Header>
				<Title>COVID-19</Title>
			</Header>
			<Tabs>
				<Tab isActive={domesticMatch !== null}>
					<Link to="domestic">국내</Link>
				</Tab>
				<Tab isActive={regionMatch !== null}>
					<Link to="region">시·도</Link>
				</Tab>
			</Tabs>
			<Routes>
				<Route path="domestic" element={<Domestic {...domesticData} />} />
				<Route path="region" element={<ByRegion {...byRegionData} />} />
			</Routes>
		</Container>
	);
}

export default Main;